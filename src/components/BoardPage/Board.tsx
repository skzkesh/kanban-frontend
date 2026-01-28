import { Column } from "./Column";

import type { Board } from "../../types/board";

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
    {
      id: "1",
      title: "To Do",
      order: 1,
    },
    {
      id: "2",
      title: "In Progress",
      order: 2,
    },
    {
      id: "3",
      title: "Done",
      order: 3,
    },
  ],
  tasks: [
    {
      id: "1",
      columnId: "1",
      title: "Task 1",
      description: "Description for Task 1",
      order: 1,
      createdAt: "today",
      label: {
        label: 'waiting',
        color: 'black',
      }
    },
    {
      id: "2",
      columnId: "1",
      title: "Task 2",
      description: "Description for Task 2",
      order: 2,
      createdAt: "today",
      label: {
        label: 'waiting',
        color: 'black',
      }
    },
    {
      id: "3",
      columnId: "2",
      title: "Task 3",
      description: "Description for Task 3",
      order: 1,
      createdAt: "today",
      label: {
        label: 'waiting',
        color: 'black',
      }
    },
    {
      id: "4",
      columnId: "3",
      title: "Task 4",
      description: "Description for Task 4",
      order: 1,
      createdAt: "today",
      label: {
        label: 'waiting',
        color: 'black',
      }
    },
  ]
};

export function BoardPage() {
  const board = mockData;

  return (
    <div className="w-full flex justify-center bg-white overflow-auto">
      {/* Board Container */}
      <div className="w-full max-w-6xl mx-auto p-6">
        {/* Board Title */}
        <h1 className="text-2xl font-medium mb-6 text-center">
          {board.title}
        </h1>

        {/* Columns Container */}
        <div className="flex gap-6 justify-center">
          {board.columns.map((column) => {
            const columnTasks = board.tasks
              .filter((task) => task.columnId === column.id)
              .sort((a, b) => a.order - b.order);

            return (
              <Column
                key={column.id}
                title={column.title}
                tasks={columnTasks}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
