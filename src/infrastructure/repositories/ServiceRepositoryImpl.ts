// src/infrastructure/repositories/ServiceRepositoryImpl.ts
import { ServiceRepository } from "../../domain/repositories/ServiceRepository";
import { Service } from "../../domain/entities/Service";
import { prisma } from "../database/database";
import { Service as ServiceModel } from "@prisma/client";

export class ServiceRepositoryImpl implements ServiceRepository {
  async getAll(): Promise<Service[]> {
    const service = await prisma.service.findMany();
    return service.map(toEntity);
  }

  async findById(id: number): Promise<Service | null> {
    const service = await prisma.service.findFirst({ where: { id } });
    if (!service) {
      return null;
    }
    return toEntity(service);
  }

  async create(service: Service): Promise<Service> {
    const model = toModel(service);
    const newService = await prisma.service.create({ data: model });
    return toEntity(newService);
  }

  async update(service: Service): Promise<Service> {
    const model = toModel(service);
    const newService = await prisma.service.update({
      where: { id: service.id },
      data: model,
    });
    return toEntity(newService);
  }

  async delete(id: number): Promise<boolean> {
    const result = await prisma.service.delete({ where: { id } });
    return !result;
  }
}

function toEntity(service: ServiceModel) {
  return new Service(
    service.id,
    service.name,
    service.description,
    service.duration,
    service.price,
    service.storeId
  );
}

function toModel(service: Service) {
  return {
    name: service.name,
    description: service.description,
    duration: service.duration,
    price: service.price,
    storeId: service.storeId,
  };
}
