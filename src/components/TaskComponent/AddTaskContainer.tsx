import type { ReactNode } from 'react';
import { X } from 'lucide-react';

type TaskLayoutProps = {
    children: ReactNode;
    onClose: () => void;
}

export function AddTaskContainer({ children, onClose }: TaskLayoutProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex-col bg-white rounded-sm shadow-lg w-1/2 h-96 max-w-sm">
                <div className="flex justify-end mr-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex items-center my-2 p-1 active:bg-gray-200 active:rounded-sm"
                        aria-label="Close"
                    >
                        <X size={24} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}