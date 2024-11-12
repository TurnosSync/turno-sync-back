import { ProfessionalRepository } from '../../../domain/repositories/ProfessionalRepository';

export class UpdateProfessional {
    constructor(private professionalRepository: ProfessionalRepository) { }

    async execute(data: { id: number; name: string; email: string | null; phoneNumber: string | null; password: string; storeId: number }) {
        const professional = await this.professionalRepository.findById(data.id);
        if (!professional) {
            throw new Error('Professional not found');
        }

        professional.name = data.name;
        professional.email = data.email;
        professional.phoneNumber = data.phoneNumber;
        professional.password = data.password;
        professional.storeId = data.storeId;

        return this.professionalRepository.update(professional);
    }
}