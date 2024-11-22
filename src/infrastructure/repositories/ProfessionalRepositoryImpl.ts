// src/infrastructure/repositories/ProfessionalRepositoryImpl.ts
import { ProfessionalRepository } from '../../domain/repositories/ProfessionalRepository';
import { Professional } from '../../domain/entities/Professional';
import pool, { prisma } from '../database/database';
import { Professional as ProfessionalModel } from '@prisma/client';

export class ProfessionalRepositoryImpl implements ProfessionalRepository {
    async getAll(): Promise<Professional[]> {
        const professionals = await prisma.professional.findMany();
        return professionals.map(toEntity);
    }

    async findById(id: number): Promise<Professional | null> {
        const professional = await prisma.professional.findFirst({ where: { id } })
        if (!professional) {
            return null;
        }
        return toEntity(professional);
    }

    async create(professional: Professional): Promise<Professional> {
        const model = toModel(professional);
        const newProfessional = await prisma.professional.create({ data: model });
        return toEntity(newProfessional);
    }

    async update(professional: Professional): Promise<Professional> {
        const model = toModel(professional);
        const newProfessional = await prisma.professional.update({ where: { id: professional.id }, data: model });
        return toEntity(newProfessional);
    }

    async delete(id: number): Promise<boolean> {
        const result = await prisma.professional.delete({ where: { id } });
        return !result;
    }
}

function toEntity(professional: ProfessionalModel) {
    return new Professional(
        professional.id,
        professional.name,
        professional.email,
        professional.phoneNumber,
        professional.password,
        professional.storeId,
    );
}

function toModel(professional: Professional) {
    return {
        name: professional.name,
        email: professional.email,
        phoneNumber: professional.phoneNumber,
        password: professional.password,
        storeId: professional.storeId,
    };
}