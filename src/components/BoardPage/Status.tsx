interface StatusProps {
    label: string;
    color: string;
}

export function Status({ color, label }: StatusProps) {
    return (
        <span 
            className="inline-flex w-1/3 items-center justify-center h-4 text-white text-xs px-3 py-1 mb-2 rounded-xl"
            style={{ backgroundColor: color }}
        >
            {label}
        </span>
    );
}