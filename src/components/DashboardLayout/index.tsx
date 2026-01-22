import type { ReactNode } from "react";
import { useAuth } from "../../features/auth/AuthContext";

import { User, LogOut } from "lucide-react";

type DashboardLayoutProps = {
    children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    }
    return (
        <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className=" p-3 flex justify-between items-center shadow">
            <h1 className="ml-2 text-l">Kanban</h1>
            <div className="inline-flex items-center mr-2">
                <div className="px-2">
                    <User className="inline mr-2" size={14}></User>
                    <span className="mr-4 text-sm">@John Doe</span>
                </div>
                <div className="">
                    <button onClick={handleLogout}>
                        <LogOut className="inline mr-2" size={14}></LogOut>
                    </button>
                    <button onClick={handleLogout} className="text-sm text-blue-500">Logout</button>
                </div>
            </div>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4 bg-gray-50">
            {children}
        </main>
        </div>
    );
}