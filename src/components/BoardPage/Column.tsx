import { TaskCard } from "./TaskCard";

import type { Task } from "../../types/task";

import { AddButton } from '../ColumnComponent/AddButton';

type ColumnProps = {
    title: string;
    tasks: Task[];
}

export function Column({ title, tasks }: ColumnProps) {
    const handleAddTask = () => {
        //console.log("add");
    }
    
    return (
        <div className="w-72 bg-gray-400 rounded-lg flex flex-col p-2">
            {/* Column Title */}
            <h2 className="font-medium my-3 text-center">{title}</h2>
            {/* Task List */}
            <div className="flex flex-col gap-3">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} label={task.label} />
                ))}
            </div>
            {/* Add Button */}
            <div className="mt-auto">
                <AddButton onClick={handleAddTask}/>
            </div>
        </div>
    );
}
