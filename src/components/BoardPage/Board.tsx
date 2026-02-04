import { Column } from "./Column";
import type { Board } from "../../types/board";

import { closestCorners, DndContext } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";

/**
 * Temporary mock data (simulates backend response)
 */
const mockData: Board = {
  id: "1",
  title: "Kanban Board",
  ownerId: "1",
  createdAt: "today",
  updatedAt: "today",
  columns: [
    { id: "1", title: "To Do", order: 1 },
    { id: "2", title: "In Progress", order: 2 },
    { id: "3", title: "Done", order: 3 },
  ],
  tasks: [
    { id: "1", columnId: "1", title: "Task 1", order: 1, createdAt: "today" },
    { id: "2", columnId: "1", title: "Task 2", order: 2, createdAt: "today" },
    { id: "3", columnId: "2", title: "Task 3", order: 1, createdAt: "today" },
    { id: "4", columnId: "3", title: "Task 4", order: 1, createdAt: "today" },
  ],
};

type BoardPageProps = {
  onAddTaskClick: (columnId: string) => void;
};

export function BoardPage({ onAddTaskClick }: BoardPageProps) {
  const [tasks, setTasks] = useState(mockData.tasks);
  const board = mockData;

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setTasks((prev) => {
      const oldIndex = prev.findIndex((t) => t.id === active.id);
      const newIndex = prev.findIndex((t) => t.id === over.id);

      return arrayMove(prev, oldIndex, newIndex).map((task, index) => ({
        ...task,
        order: index + 1,
      }));
    });
  }

  return (
    <div className="w-full flex justify-center bg-white overflow-auto">
      <div className="w-full max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-medium mb-6 text-center">
          {board.title}
        </h1>

        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <div className="flex gap-6 justify-center">
            {board.columns.map((column) => {
              const columnTasks = tasks
                .filter((task) => task.columnId === column.id)
                .sort((a, b) => a.order - b.order);

              return (
                <SortableContext
                  key={column.id}
                  items={columnTasks.map((t) => t.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <Column
                    column={column}
                    tasks={columnTasks}
                    onAddTaskClick={onAddTaskClick}
                  />
                </SortableContext>
              );
            })}
          </div>
        </DndContext>
      </div>
    </div>
  );
}
