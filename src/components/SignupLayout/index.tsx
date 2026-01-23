import type { ReactNode } from 'react';

type SignupLayoutProps = {
    children: ReactNode;
}

export function SignupLayout({children}: SignupLayoutProps){
    {/* Outer Container */}
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center bg-white">{children}</div>
    )
};