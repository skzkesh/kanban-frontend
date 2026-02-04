import { useState } from "react";

// Define the props interface
interface ColorPaletteProps {
    onColorSelect: (color: string) => void; // Define the type of the callback function
}

export function ColorPalette({ onColorSelect }: ColorPaletteProps) {
    const colors = [
        'bg-red-500',
        'bg-green-500',
        'bg-blue-500',
        'bg-yellow-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-indigo-500',
        'bg-gray-500',
    ];
    
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const handleColorClick = (color: string) => {
        setSelectedColor(color);
        onColorSelect(color);
    }

    return (
        <div className="border-lg grid grid-cols-4 border p-2 w-40 rounded-lg">
            {colors.map((color, index) => (
                <div 
                    key={index} 
                    className={`relative w-7 h-7 ${color} rounded-full flex my-1 cursor-pointer`}
                    onClick={() => handleColorClick(color)} 
                >
                    {selectedColor === color && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 border-2 border-white bg-white rounded-full" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}