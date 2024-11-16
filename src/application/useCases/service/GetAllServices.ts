import { ServiceRepository } from "../../../domain/repositories/ServiceRepository";

export class GetAllServices {
  constructor(private serviceRepository: ServiceRepository) {}

  async execute() {
    return this.serviceRepository.getAll();
  }
}
