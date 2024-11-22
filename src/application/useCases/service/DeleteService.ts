import { ServiceRepository } from "../../../domain/repositories/ServiceRepository";

export class DeleteService {
  constructor(private serviceRepository: ServiceRepository) {}

  async execute(data: { id: number }) {
    const service = await this.serviceRepository.findById(data.id);
    if (!service) {
      throw new Error("Service not found");
    }

    return this.serviceRepository.delete(service.id);
  }
}
