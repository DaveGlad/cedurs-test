"use client";
import Sidebar from "@/components/Sidebar";
import { Bell, Search } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-y-auto">
        <header className="flex justify-between items-center mb-8 p-4 bg-white border-b">
          <div className="flex items-center gap-4">
            <h2 className=" font-bold text-lg">Sales Admin</h2>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:inline-block">
                <input
                  type="text"
                  placeholder="Search anything here..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-[280px] text-sm"
                />
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
              <button className="p-2 rounded-lg border border-gray-200">
                <Bell size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
