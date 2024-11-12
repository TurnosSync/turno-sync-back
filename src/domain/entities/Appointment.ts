export class Appointment {
    constructor(
        public id: number,
        public clientId: number,
        public professionalId: number,
        public serviceId: number,
        public appointmentDate: Date,
        public status: string,
    ) { }
}