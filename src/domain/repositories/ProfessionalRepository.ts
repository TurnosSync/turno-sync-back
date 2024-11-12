import { Professional } from '../entities/Professional';

export interface ProfessionalRepository {
    getAll(): Promise<Professional[]>;
    findById(id: number): Promise<Professional | null>;
    create(professional: Professional): Promise<Professional>;
    update(professional: Professional): Promise<Professional>;
    delete(id: number): Promise<boolean>;
}