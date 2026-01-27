import type { Status } from './status';

export type Task = {
    id: string;
    title: string;
    description?: string;
    order: number;
    createdAt: string;
    label?: Status;
}