import {
  ChevronDown,
  MessageSquare,
  Settings,
  Shield,
  TrendingUp,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-[280px] bg-[#0B2447] text-white p-6 flex flex-col  md:block">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-8 h-8 bg-[#4ade80] rounded-lg grid place-items-center">
          <span className="text-lg">S</span>
        </div>
        <span className="font-semibold text-lg">Siohioma</span>
      </div>

      <div className="mb-8">
        <p className="text-xs text-gray-400 mb-4 px-4">MENU</p>
        <nav className="space-y-2">
          <button className="flex items-center gap-3 text-[#4ade80] bg-[#1c3a61] w-full px-4 py-2.5 rounded-lg">
            <div className="grid place-items-center w-5 h-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            </div>
            <span>Overview</span>
          </button>
          <button className="flex items-center gap-3 text-gray-400 hover:bg-[#1c3a61] w-full px-4 py-2.5 rounded-lg">
            <TrendingUp size={20} />
            <span>Statistics</span>
          </button>
          <button className="flex items-center gap-3 text-gray-400 hover:bg-[#1c3a61] w-full px-4 py-2.5 rounded-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>Customers</span>
          </button>
          <button className="flex items-center justify-between text-gray-400 hover:bg-[#1c3a61] w-full px-4 py-2.5 rounded-lg">
            <div className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>Product</span>
            </div>
            <ChevronDown size={16} />
          </button>
          <button className="flex items-center justify-between text-gray-400 hover:bg-[#1c3a61] w-full px-4 py-2.5 rounded-lg">
            <div className="flex items-center gap-3">
              <MessageSquare size={20} />
              <span>Messages</span>
            </div>
            <span className="bg-[#4ade80] text-white text-xs px-2 py-0.5 rounded-full">
              14
            </span>
          </button>
          <button className="flex items-center gap-3 text-gray-400 hover:bg-[#1c3a61] w-full px-4 py-2.5 rounded-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
              <path d="M7 7h.01" />
            </svg>
            <span>Transactions</span>
          </button>
        </nav>
      </div>

      <div>
        <p className="text-xs text-gray-400 mb-4 px-4">GENERAL</p>
        <nav className="space-y-2">
          <button className="flex items-center gap-3 text-gray-400 hover:bg-[#1c3a61] w-full px-4 py-2.5 rounded-lg">
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <button className="flex items-center gap-3 text-gray-400 hover:bg-[#1c3a61] w-full px-4 py-2.5 rounded-lg">
            <Shield size={20} />
            <span>Security</span>
          </button>
        </nav>
      </div>

      <div className="mt-auto pt-8">
        <div className="flex items-center gap-3 px-4">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div>
            <p className="font-medium">Ferdianus Puro</p>
            <p className="text-sm text-gray-400">@ferdianus@gmail.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
