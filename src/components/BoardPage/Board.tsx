import type { ReactNode } from "react";
import { Column } from "./Column";
import type { Board } from "../../types/board";

type BoardPageProps = {
    children: ReactNode;
}

export function BoardPage() {
    return (
        <div className="w-full flex items-center justify-center bg-white overflow-auto">
            { /* Board Container */}
            <div className="w-full max-w-6xl mx-auto"> 
                {/* Board Title */}
                <h1 className="flex justify-center py-3 text-2xl font-medium">Kanban Board</h1>
                { /* Columns Container */}
                <div className="flex gap-6 justify-center py-2">
                    <Column title="To Do" />
                    <Column title="In Progress" />
                    <Column title="Done" />
                </div>
            </div>
        </div>
    );
}