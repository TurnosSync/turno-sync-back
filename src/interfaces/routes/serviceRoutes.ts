// routes/serviceRoutes.ts
import { Request, Response, RequestHandler, Router } from "express";
import {
  createServiceHandler,
  getAllServicesHandler,
  getServiceByIdHandler,
  updateServiceHandler,
  deleteServiceHandler,
} from "../controllers/ServiceController";

const router = Router();

router.get("/", getAllServicesHandler);
router.get("/:id", getServiceByIdHandler);
router.post("/", createServiceHandler);
router.put("/:id", updateServiceHandler);
router.delete("/:id", deleteServiceHandler);

export default router;
