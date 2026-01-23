import { TaskCard } from "./TaskCard";

import type { Task } from "../../types/task";

type ColumnProps = {
    title: string;
    tasks: Task[];
}

export function Column({ title, tasks }: ColumnProps) {
    return (
        <div className="w-72 bg-gray-400 justify-center flex flex-col rounded-lg">
            {/* Column Title */}
            <h2 className="font-medium my-3 justify-center flex">{title}</h2>
            {/* Task List */}
            <div className="flex flex-col gap-3 p-2">
                {
                    tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))
                }
            </div>
        </div>
    );
}