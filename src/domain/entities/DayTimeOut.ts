// models/DayTimeOut.ts
export interface DayTimeOut {
    id: number;
    professionalDayId: number;
    startTime: string; // format HH:mm:ss
    endTime: string; // format HH:mm:ss
    reason?: string;
    activeBeforeTime?: Date;
}
