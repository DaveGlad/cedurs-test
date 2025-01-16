"use client";
import Sidebar from "@/components/Sidebar";
import { Bell, ChevronDown, Plus, Search } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <header className="flex justify-between items-center mb-8 p-4 bg-gray-50 ">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-700 px-3 py-1.5 border rounded-lg">
              <span>Sales Admin</span>
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
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
            <button className="flex items-center gap-2 bg-[#4ade80] text-white px-4 py-2 rounded-lg text-sm">
              <Plus size={18} />
              Add new product
            </button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
