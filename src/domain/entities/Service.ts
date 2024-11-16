// src/domain/entities/Service.ts
export class Service {
  constructor(
    public id: number,
    public name: string,
    public description: string | null,
    public duration: number,
    public price: number,
    public storeId: number
  ) {}
}
