import React from 'react';

interface SubmitButtonProps {
    text: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
    return (
        <button className="w-full h-10 bg-[#B893DC] mt-2 text-white rounded">
            {text} 
        </button>
    );
};