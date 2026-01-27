import React from "react";

interface StatusProps {
    label: string;
    color: string;
}

export function Status({ color, label }: StatusProps){
    return (
        <span 
            className="inline-block text-white px-3 py-1 rounded-md m-1" 
            style={{ backgroundColor: color }}
        >
            {label}
        </span>
    );
}