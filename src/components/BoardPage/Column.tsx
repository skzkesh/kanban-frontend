import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { TaskCard } from "./TaskCard";
import type { Task } from "../../types/task";
import { AddButton } from "../ColumnComponent/AddButton";

type ColumnProps = {
  column: {
    id: string;
    title: string;
  };
  tasks: Task[];
  onAddTaskClick: (columnId: string) => void;
};

export function Column({ column, tasks, onAddTaskClick }: ColumnProps) {
  const handleAddTask = () => {
    onAddTaskClick(column.id);
  };
  return (
    <div className="w-72 bg-gray-200 rounded flex flex-col p-3">
      <h2 className="text-center font-medium mb-3">{column.title}</h2>

      <SortableContext
        items={tasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col gap-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
      <div className="mt-auto">
        <AddButton onClick={handleAddTask} />
      </div>
    </div>
  );
}
