import type { Task } from "../../types/task";

type TaskCardProps = {
    title: string;
}

export function TaskCard({title}: TaskCardProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-2">
            <h3 className="">{title}</h3>
        </div>
    );
}