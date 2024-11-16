import { ServiceRepository } from "../../../domain/repositories/ServiceRepository";

export class UpdateService {
  constructor(private serviceRepository: ServiceRepository) {}

  async execute(data: {
    id: number;
    name: string;
    description: string | null;
    duration: number;
    price: number;
    storeId: number;
  }) {
    const service = await this.serviceRepository.findById(data.id);
    if (!service) {
      throw new Error("Service not found");
    }

    service.name = data.name;
    service.description = data.description;
    service.duration = data.duration;
    service.price = data.price;
    service.storeId = data.storeId;

    return this.serviceRepository.update(service);
  }
}
