import { Professional } from '../../../domain/entities/Professional';
import { ProfessionalRepository } from '../../../domain/repositories/ProfessionalRepository';

export class CreateProfessional {
    constructor(private professionalRepository: ProfessionalRepository) { }

    async execute(data: { name: string; email: string | null; phoneNumber: string | null; password: string; storeId: number }) {
        const newProfessional = new Professional(0, data.name, data.email, data.phoneNumber, data.password, data.storeId);
        return this.professionalRepository.create(newProfessional);
    }
}