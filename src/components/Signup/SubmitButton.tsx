import React from 'react';

// Define props interface
interface SubmitButtonProps {
    text: string; // Define the expected 'text' prop
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
    return (
        <button className="w-full h-10 bg-[#B893DC] mt-2 text-white rounded">
            {text} 
        </button>
    );
};