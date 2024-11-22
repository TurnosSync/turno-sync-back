// src/infrastructure/repositories/ServiceRepositoryImpl.ts
import { ServiceRepository } from "../../domain/repositories/ServiceRepository";
import { Service } from "../../domain/entities/Service";
import pool from "../database/database";

export class ServiceRepositoryImpl implements ServiceRepository {
  async getAll(): Promise<Service[]> {
    const result = await pool.query("SELECT * FROM public.\"Service\"");
    return result.rows.map(
      (row) =>
        new Service(
          row.id,
          row.name,
          row.description,
          row.duration,
          row.price,
          row.storeId
        )
    );
  }

  async findById(id: number): Promise<Service | null> {
    const result = await pool.query("SELECT * FROM public.\"Service\" WHERE id = $1", [
      id,
    ]);
    if (result.rows.length) {
      const row = result.rows[0];
      return new Service(
        row.id,
        row.name,
        row.description,
        row.duration,
        row.price,
        row.storeId
      );
    }
    return null;
  }

  async create(service: Service): Promise<Service> {
    const result = await pool.query(
      "INSERT INTO public.\"Service\" (name, description, duration, price, \"storeId\") VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        service.name,
        service.description,
        service.duration,
        service.price,
        service.storeId,
      ]
    );
    const row = result.rows[0];
    return new Service(
      row.id,
      row.name,
      row.description,
      row.duration,
      row.price,
      row.store_id
    );
  }

  async update(service: Service): Promise<Service> {
    const result = await pool.query(
      "UPDATE public.\"Service\" SET name = $1, description = $2, duration = $3, price = $4, \"storeId\" = $5 WHERE id = $6 RETURNING *",
      [
        service.name,
        service.description,
        service.duration,
        service.price,
        service.storeId,
        service.id,
      ]
    );
    const row = result.rows[0];
    return new Service(
      row.id,
      row.name,
      row.description,
      row.duration,
      row.price,
      row.store_id
    );
  }

  async delete(id: number): Promise<boolean> {
    const result = await pool.query("DELETE FROM public.\"Service\" WHERE id = $1", [id]);
    return result.rowCount !== null && result.rowCount > 0;
  }
}
