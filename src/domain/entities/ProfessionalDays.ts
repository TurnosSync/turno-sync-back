// models/ProfessionalDays.ts
export interface ProfessionalDays {
    id: number;
    professionalId: number;
    dayId: number;
    startTime: string; // format HH:mm:ss
    endTime: string; // format HH:mm:ss
}
