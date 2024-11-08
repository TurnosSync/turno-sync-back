// routes/professionalRoutes.ts
import { Request, Response, RequestHandler, Router } from 'express';
import {
    createProfessionalHandler,
    getAllProfessionalsHandler,
    getProfessionalByIdHandler,
    updateProfessionalHandler,
    deleteProfessionalHandler
} from '../controllers/ProfessionalController';

const router = Router();

router.get('/', getAllProfessionalsHandler);
router.get('/:id', getProfessionalByIdHandler);
router.post('/', createProfessionalHandler);
router.put('/:id', updateProfessionalHandler);
router.delete('/:id', deleteProfessionalHandler);




export default router;
