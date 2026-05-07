import { Bell, Moon, Info, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-end px-8">
      <div className="flex items-center gap-4 rounded-full bg-white px-4 py-2 shadow-sm">
        <div className="flex h-8 w-44 items-center gap-2 rounded-full bg-slate-100 px-4">
          <Search size={14} className="text-slate-500" />
          <input
            type="text"
            placeholder="검색하기"
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        <button className="text-slate-500 hover:text-slate-800">
          <Bell size={18} />
        </button>

        <button className="text-slate-500 hover:text-slate-800">
          <Moon size={18} />
        </button>

        <button className="text-slate-500 hover:text-slate-800">
          <Info size={18} />
        </button>

        <img
          src="/profile.svg"
          alt="프로필"
          className="h-9 w-9 rounded-full object-cover"
        />
      </div>
    </header>
  );
}