// models/ProfessionalDays.ts
export interface ProfessionalDays {
    id: number;
    professionalId: number;
    dayId: number;
    startTime: string; // formato HH:mm:ss
    endTime: string; // formato HH:mm:ss
}
