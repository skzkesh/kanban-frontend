import type { Task } from "../../types/task";
import type { Status } from '../../types/status';

type TaskCardProps = {
    task: Task;
    label?: Status;
}

export function TaskCard({task}: TaskCardProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mb-2">
            
            <h3 className="">{task.title}</h3>
        </div>
    );
}