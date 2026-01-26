import React from 'react';

interface InputFieldProps {
    inputTitle: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({ inputTitle, type, value, placeholder, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium">{inputTitle}</label>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="mt-1 p-2 border rounded w-full"
                required
            />
        </div>
    );
};