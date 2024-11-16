import { Service } from "../entities/Service";

export interface ServiceRepository {
  getAll(): Promise<Service[]>;
  findById(id: number): Promise<Service | null>;
  create(service: Service): Promise<Service>;
  update(service: Service): Promise<Service>;
  delete(id: number): Promise<boolean>;
}
