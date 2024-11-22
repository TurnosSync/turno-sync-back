import express from "express";
import cors from "cors";
import professionalRoutes from "./interfaces/routes/professionalRoutes";
import serviceRoutes from "./interfaces/routes/serviceRoutes";
import snakeToCamelMiddleware from "./interfaces/middlewares/snakeToCamelMiddleware";
import config from "./infrastructure/config/config";

const app = express();

app.use(
  cors({
    origin: config.host, // Allow FrontEnd Requests
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(snakeToCamelMiddleware);

app.use("/api/professionals", professionalRoutes);
app.use("/api/services", serviceRoutes);

export default app;
