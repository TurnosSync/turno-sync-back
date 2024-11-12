import { ProfessionalRepository } from '../../../domain/repositories/ProfessionalRepository';

export class GetProfessionalById {
    constructor(private professionalRepository: ProfessionalRepository) { }

    async execute(data: { id: number }) {
        return this.professionalRepository.findById(data.id);
    }
}