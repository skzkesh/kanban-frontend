import { Plus } from 'lucide-react';

interface AddButtonProps {
    onClick: () => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
    return (
        <button className="flex flex-row items-center mt-3 pl-2 py-2 gap-2 hover:bg-gray-300 pr-3 rounded" onClick={onClick}>
            <Plus size={14} color='black'/>
            <p>Add new task</p>
        </button>
    );
}