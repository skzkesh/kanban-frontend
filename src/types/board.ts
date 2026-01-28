import type { Column } from './column';
import type { Task } from './task';

export type Board = {
    id: string;
    title: string;
    ownerId: string;
    createdAt: string;
    updatedAt: string;
    columns: Column[];
    tasks: Task[];
}