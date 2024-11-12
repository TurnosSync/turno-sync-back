import { ProfessionalRepository } from '../../../domain/repositories/ProfessionalRepository';

export class DeleteProfessional {
    constructor(private professionalRepository: ProfessionalRepository) { }

    async execute(data: { id: number }) {
        const professional = await this.professionalRepository.findById(data.id);
        if (!professional) {
            throw new Error('Professional not found');
        }

        return this.professionalRepository.delete(professional.id);
    }
}