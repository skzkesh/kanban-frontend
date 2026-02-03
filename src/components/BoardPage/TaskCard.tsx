import { Status } from './Status';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Task } from "../../types/task";

type TaskCardProps = {
  task: Task;
};

export function TaskCard({ task }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-white p-3 rounded shadow"
    >
      <div className="flex flex-col">
        <Status color="red" label="pending"/>
        {task.title}
      </div>
    </div>
  );
}
