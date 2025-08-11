
export interface Grades {
  kurdish: string;
  arabic: string;
  english: string;
  biology: string;
  chemistry: string;
  physics: string;
  math: string;
}

export interface Student {
  fullName: string;
  serialNumber: string;
  school: string;
  grades: Grades;
}

export enum ComputerStatus {
  Available = 'available',
  Busy = 'busy',
}

export interface Computer {
  id: number;
  status: ComputerStatus;
  studentData: Student | null;
}
