// config/database.ts
import { Pool } from 'pg';
import config from '../../infrastructure/config/config';
import { PrismaClient } from '@prisma/client';

const pool = new Pool({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    port: config.dbPort,
});

pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database');
});


export const prisma = new PrismaClient();

export default pool;
