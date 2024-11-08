// src/config/config.ts
import dotenv from 'dotenv';
import path from 'path';

// Cargar las variables de entorno desde el archivo .env
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

class Config {
    private static instance: Config;

    // Variables de configuración de la aplicación y la base de datos
    public readonly port: string;
    public readonly dbHost: string;
    public readonly dbUser: string;
    public readonly dbPassword: string;
    public readonly dbName: string;
    public readonly dbPort: number;

    // Constructor privado para Singleton
    private constructor() {
        this.port = process.env.PORT || '3000';
        this.dbHost = process.env.DB_HOST || 'localhost';
        this.dbUser = process.env.DB_USER || '';
        this.dbPassword = process.env.DB_PASSWORD || '';
        this.dbName = process.env.DB_NAME || '';
        this.dbPort = parseInt(process.env.DB_PORT || '5432', 10);
    }

    // Método estático para obtener una única instancia de Config
    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }
}

export default Config.getInstance();