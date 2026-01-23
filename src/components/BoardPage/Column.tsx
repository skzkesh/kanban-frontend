import { TaskCard } from "./TaskCard";
import type { Column as ColumnType } from "../../types/column";

type ColumnProps = {
    title: string;
}

export function Column({ title }: ColumnProps) {
    return (
        <div className="w-72 bg-gray-400 justify-center flex flex-col rounded-lg">
            {/* Column Title */}
            <h2 className="font-medium my-3 justify-center flex">{title}</h2>
            {/* Task List */}
            <div className="flex flex-col gap-3 p-2">
                <TaskCard title="Sample Task" />
                <TaskCard title="Another Task" />   
            </div>
        </div>
    );
}