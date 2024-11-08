// app.ts
import express from 'express';
import professionalRoutes from './interfaces/routes/professionalRoutes';
import snakeToCamelMiddleware from './interfaces/middlewares/snakeToCamelMiddleware';

const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(snakeToCamelMiddleware); // Middleware para transformar snake_case a camelCase

app.use('/api/professionals', professionalRoutes);

export default app;