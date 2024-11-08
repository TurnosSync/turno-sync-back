import { ProfessionalRepository } from '../../../domain/repositories/ProfessionalRepository';

export class GetAllProfessionals {
    constructor(private professionalRepository: ProfessionalRepository) { }

    async execute() {
        return this.professionalRepository.getAll();
    }
}