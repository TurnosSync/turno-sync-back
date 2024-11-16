// app.ts
import express from "express";
import professionalRoutes from "./interfaces/routes/professionalRoutes";
import serviceRoutes from "./interfaces/routes/serviceRoutes";
import snakeToCamelMiddleware from "./interfaces/middlewares/snakeToCamelMiddleware";

const app = express();

app.use(express.json());
app.use(snakeToCamelMiddleware);

app.use("/api/professionals", professionalRoutes);
app.use("/api/services", serviceRoutes);

export default app;
