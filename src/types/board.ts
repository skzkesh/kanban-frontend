import type { Column } from './column';

export type Board = {
    id: string;
    title: string;
    ownerId: string;
    createdAt: string;
    updatedAt: string;
    columns: Column[];
}