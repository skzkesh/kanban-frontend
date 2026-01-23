import type { Task } from "../../types/task";

type TaskCardProps = {
    task: Task;
}

export function TaskCard({task}: TaskCardProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-2">
            <h3 className="">{task.title}</h3>
        </div>
    );
}