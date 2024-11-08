import { Request, Response } from 'express';
import { CreateProfessional } from '../../application/useCases/professional/CreateProfessional';
import { GetAllProfessionals } from '../../application/useCases/professional/GetAllProfessionals';
import { ProfessionalRepositoryImpl } from '../../infrastructure/repositories/ProfessionalRepositoryImpl';
import { GetProfessionalById } from '../../application/useCases/professional/GetProfessionalById';
import { DeleteProfessional } from '../../application/useCases/professional/DeleteProfessional';
import { UpdateProfessional } from '../../application/useCases/professional/UpdateProfessional';

const professionalRepository = new ProfessionalRepositoryImpl();
const createProfessional = new CreateProfessional(professionalRepository);
const getProfessionals = new GetAllProfessionals(professionalRepository);
const getProfessionalById = new GetProfessionalById(professionalRepository);
const deleteProfessional = new DeleteProfessional(professionalRepository);
const updateProfessional = new UpdateProfessional(professionalRepository);

export const getAllProfessionalsHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const professionals = await getProfessionals.execute();
        res.status(200).json(professionals);
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

export const getProfessionalByIdHandler = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    try {
        const professional = await getProfessionalById.execute({ id });
        res.status(200).json(professional);
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

export const createProfessionalHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const professional = await createProfessional.execute(req.body);
        res.status(201).json(professional);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const deleteProfessionalHandler = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    try {
        await deleteProfessional.execute({ id });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const updateProfessionalHandler = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    try {
        const professional = await updateProfessional.execute({ id, ...req.body });
        res.status(200).json(professional);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};
