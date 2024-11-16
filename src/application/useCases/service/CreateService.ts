import { Service } from "../../../domain/entities/Service";
import { ServiceRepository } from "../../../domain/repositories/ServiceRepository";

export class CreateService {
  constructor(private serviceRepository: ServiceRepository) {}

  async execute(data: {
    name: string;
    description: string | null;
    duration: number;
    price: number;
    storeId: number;
  }) {
    const newService = new Service(
      0,
      data.name,
      data.description,
      data.duration,
      data.price,
      data.storeId
    );
    return this.serviceRepository.create(newService);
  }
}
