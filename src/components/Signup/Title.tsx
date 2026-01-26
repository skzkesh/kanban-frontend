import type { ReactNode } from "react";

type SignupTitleProps = {
    children: ReactNode;
}

export function SignupTitle({children}: SignupTitleProps){
    return (
        <div className="text-center text-3xl font-medium mt-3">{children}</div>
    );
}