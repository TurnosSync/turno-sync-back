// src/infrastructure/repositories/ProfessionalRepositoryImpl.ts
import { ProfessionalRepository } from '../../domain/repositories/ProfessionalRepository';
import { Professional } from '../../domain/entities/Professional';
import pool from '../database/database';

export class ProfessionalRepositoryImpl implements ProfessionalRepository {
    async getAll(): Promise<Professional[]> {
        const result = await pool.query('SELECT * FROM professional');
        return result.rows.map(row => new Professional(row.id, row.name, row.email, row.phone_number, row.password, row.store_id));
    }

    async findById(id: number): Promise<Professional | null> {
        const result = await pool.query('SELECT * FROM professional WHERE id = $1', [id]);
        if (result.rows.length) {
            const row = result.rows[0];
            return new Professional(row.id, row.name, row.email, row.phone_number, row.password, row.store_id);
        }
        return null;
    }

    async create(professional: Professional): Promise<Professional> {
        const result = await pool.query(
            'INSERT INTO professional (name, email, phone_number, password, store_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [professional.name, professional.email, professional.phoneNumber, professional.password, professional.storeId]
        );
        const row = result.rows[0];
        return new Professional(row.id, row.name, row.email, row.phone_number, row.password, row.store_id);
    }

    async update(professional: Professional): Promise<Professional> {
        const result = await pool.query(
            'UPDATE professional SET name = $1, email = $2, phone_number = $3, password = $4, store_id = $5 WHERE id = $6 RETURNING *',
            [professional.name, professional.email, professional.phoneNumber, professional.password, professional.storeId, professional.id]
        );
        const row = result.rows[0];
        return new Professional(row.id, row.name, row.email, row.phone_number, row.password, row.store_id);
    }

    async delete(id: number): Promise<boolean> {
        const result = await pool.query('DELETE FROM professional WHERE id = $1', [id]);
        return result.rowCount !== null && result.rowCount > 0;
    }
}
