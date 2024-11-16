import { Request, Response } from "express";
import { CreateService } from "../../application/useCases/service/CreateService";
import { GetAllServices } from "../../application/useCases/service/GetAllServices";
import { ServiceRepositoryImpl } from "../../infrastructure/repositories/ServiceRepositoryImpl";
import { GetServiceById } from "../../application/useCases/service/GetServiceById";
import { DeleteService } from "../../application/useCases/service/DeleteService";
import { UpdateService } from "../../application/useCases/service/UpdateService";

const serviceRepository = new ServiceRepositoryImpl();
const createService = new CreateService(serviceRepository);
const getAllServices = new GetAllServices(serviceRepository);
const getServiceById = new GetServiceById(serviceRepository);
const deleteService = new DeleteService(serviceRepository);
const updateService = new UpdateService(serviceRepository);

export const createServiceHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const service = await createService.execute(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getAllServicesHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const services = await getAllServices.execute();
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const getServiceByIdHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);
  try {
    const service = await getServiceById.execute({ id });
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const deleteServiceHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);
  try {
    await deleteService.execute({ id });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const updateServiceHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);
  try {
    const service = await updateService.execute({ id, ...req.body });
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
