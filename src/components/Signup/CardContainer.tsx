import type { ReactNode } from "react";

type CardContainerProps = {
    children: ReactNode;
}

export function CardContainer({children}: CardContainerProps){
    return (
        <div className="border shadow-md rounded-lg w-full max-w-sm mx-auto h-96 p-4 justify-center">{children}</div>
    );
}