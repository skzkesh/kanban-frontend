import type { Task } from './task';

export type Column = {
    id: string;
    title: string;
    order: number;
    tasks: Task[]; 
}