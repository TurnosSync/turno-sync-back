import { ServiceRepository } from "../../../domain/repositories/ServiceRepository";

export class GetServiceById {
  constructor(private serviceRepository: ServiceRepository) {}

  async execute(data: { id: number }) {
    return this.serviceRepository.findById(data.id);
  }
}
