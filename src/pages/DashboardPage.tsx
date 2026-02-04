import { useState } from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { AddTaskContainer } from '../components/TaskComponent/AddTaskContainer';
import { TaskForm } from '../components/TaskComponent/TaskForm';
import { BoardPage } from '../components/BoardPage/Board';

function DashboardPage() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const handleOpenTaskModal = () => {
    setIsTaskModalOpen(true);
  };

  const handleCloseTaskModal = () => {
    setIsTaskModalOpen(false);
  };

  return (
    <DashboardLayout>
      <BoardPage onAddTaskClick={handleOpenTaskModal} />
      {isTaskModalOpen && (
        <AddTaskContainer onClose={handleCloseTaskModal}>
          <TaskForm />
        </AddTaskContainer>
      )}
    </DashboardLayout>
  );
}

export default DashboardPage;
