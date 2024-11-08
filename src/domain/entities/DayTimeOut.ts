// models/DayTimeOut.ts
export interface DayTimeOut {
    id: number;
    professionalDayId: number;
    startTime: string; // formato HH:mm:ss
    endTime: string; // formato HH:mm:ss
    reason?: string;
    activeBeforeTime?: Date;
}
