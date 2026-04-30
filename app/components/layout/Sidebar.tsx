import {
  Sparkles,
  Layers,
  Home,
  FileText,
  Lock,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-[324px] min-h-screen bg-white rounded-[28px] shadow-sm flex flex-col">
      {/* Logo */}
      <div className="h-[120px] flex items-center justify-center border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="flex items-end gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-400" />
            <span className="w-3 h-7 rounded-full bg-cyan-400" />
            <span className="w-3 h-10 rounded-full bg-gradient-to-b from-blue-400 via-purple-400 to-orange-400" />
            <span className="w-3 h-4 rounded-full bg-blue-400" />
          </div>
          <span className="text-2xl font-extrabold text-[#1b0612]">
            LawEasy
          </span>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-10 py-10 space-y-7">
        <div className="flex items-center gap-4 text-[#160713] font-bold">
          <Sparkles size={22} />
          <span>로이지 AI한테 질문하기</span>
        </div>

        <MenuItem icon={<Layers size={22} />} text="내 사건 관리" />
        <MenuItem icon={<Home size={22} />} text="법원 홈페이지" />

        <div>
          <MenuItem icon={<FileText size={22} />} text="주요법원서식" />
          <div className="ml-10 mt-5 space-y-4 text-sm text-gray-300 font-medium">
            <p>민사소송</p>
            <p>형사소송</p>
            <p>그 외</p>
          </div>
        </div>

        <div>
          <MenuItem icon={<Lock size={22} />} text="계정 관리" />
          <div className="ml-10 mt-5 space-y-4 text-sm text-gray-300 font-medium">
            <p>개인정보 관리</p>
            <p>크레딧 구매하기</p>
            <p>개인정보 처리방침</p>
          </div>
        </div>
      </nav>

      {/* Bottom Card */}
      <div className="px-7 pb-5">
        <div className="bg-[#f4f2f3] rounded-2xl px-6 py-8 text-center">
          <p className="font-extrabold text-lg text-[#160713] mb-3">
            소송절차가 어려우신가요?
          </p>
          <p className="text-sm leading-7 font-semibold text-[#160713]">
            법이 어려운 분들을 위해
            <br />
            로이지가 ‘생활법률강의’를
            <br />
            진행하고 있습니다.
          </p>

          <button className="mt-7 text-sm font-extrabold underline">
            유튜브 보러가기
          </button>
        </div>

        {/* User */}
        <div className="mt-6 bg-white rounded-full shadow-sm px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/profile.svg"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold text-sm text-[#160713]">김민진 님</span>
          </div>

          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}

function MenuItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 text-gray-300 font-semibold">
      {icon}
      <span>{text}</span>
    </div>
  );
}