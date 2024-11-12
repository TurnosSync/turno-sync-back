// app.ts
import express from 'express';
import professionalRoutes from './interfaces/routes/professionalRoutes';
import snakeToCamelMiddleware from './interfaces/middlewares/snakeToCamelMiddleware';

const app = express();

app.use(express.json());
app.use(snakeToCamelMiddleware);

app.use('/api/professionals', professionalRoutes);

export default app;