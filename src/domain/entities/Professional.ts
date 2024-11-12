// src/domain/entities/Professional.ts
export class Professional {
    constructor(
        public id: number,
        public name: string,
        public email: string | null,
        public phoneNumber: string | null,
        public password: string,
        public storeId: number,
    ) { }
}
