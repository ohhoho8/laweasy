"use client";

import { useState } from "react";
import { Folder, FilePlus, MoreVertical, X } from "lucide-react";

type FolderItem = {
  id: number;
  name: string;
  isNew?: boolean;
};

const initialFolders: FolderItem[] = [
  { id: 1, name: "새로운 폴더 만들기", isNew: true },
  { id: 2, name: "11/03 합의서" },
  { id: 3, name: "09/18 고소장" },
];

const chatList = ["중고거래 사기", "주거 침입 문제", "악플러 고소"];

const processSteps = [
  "소장접수(원고)",
  "소장심사(법원)",
  "소장부본 송달 (법원 → 피고)",
  "답변서 제출",
  "답변서 송달 (법원 → 원고)",
  "쟁점정리기일",
  "변론준비절차",
  "변론기일",
];

export default function MyCasePage() {
  const [folders, setFolders] = useState<FolderItem[]>(initialFolders);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [selectedChat, setSelectedChat] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<FolderItem | null>(null);

  const handleCreateFolder = () => {
    if (!folderName || !selectedChat) return;

    const newFolder = {
      id: Date.now(),
      name: folderName,
    };

    setFolders([folders[0], newFolder, ...folders.slice(1)]);
    setIsModalOpen(false);
    setFolderName("");
    setSelectedChat("");
  };

  if (selectedFolder && !selectedFolder.isNew) {
    return (
      <main className="min-h-screen bg-white px-20 py-12 relative overflow-hidden">
        <BackgroundBlur />

        <h1 className="text-3xl font-bold mb-14">내 사건 관리</h1>

        <section className="relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div className="text-center">
              <div className="w-32 h-36 rounded-2xl bg-[#f1ecff] shadow-xl flex items-center justify-center mb-3">
                <Folder className="w-14 h-14 text-[#7b5cff]" fill="#7b5cff" />
              </div>
              <p className="text-sm font-semibold">{selectedFolder.name}</p>
            </div>

            <div className="text-center text-sm text-gray-700">
              <p className="mb-2">다음 단계: 답변서 송달 (법원→원고)</p>
              <p>로이지가 카카오톡 알림으로 알려드릴게요!</p>
            </div>

            <div className="w-28 h-28 rounded-full border-[18px] border-[#7b3ff2] flex items-center justify-center text-sm font-bold">
              4/10
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6">
            <div className="mb-5">
              <p className="text-xs text-[#6b3cff] font-semibold mb-1">채팅</p>
              <h2 className="text-2xl font-bold">중고거래 사기</h2>
            </div>

            <div className="flex gap-3 mb-6">
              <button className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                생성한 서류 다운로드
              </button>
              <button className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                채팅 이어서 하기 →
              </button>
            </div>

            <div className="divide-y">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3 py-4 text-sm">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      index < 4 ? "bg-[#6b3cff]" : "bg-gray-200"
                    }`}
                  />
                  <span className={index < 4 ? "font-semibold" : "text-gray-500"}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-20 py-12 relative overflow-hidden">
      <BackgroundBlur />

      <h1 className="text-3xl font-bold mb-14">내 사건 관리</h1>

      <section className="relative z-10 flex justify-between">
        <div className="flex gap-6">
          {folders.map((folder) => (
            <button
              key={folder.id}
              onClick={() =>
                folder.isNew ? setIsModalOpen(true) : setSelectedFolder(folder)
              }
              className="group text-center"
            >
              <div
                className={`w-32 h-36 rounded-2xl shadow-lg flex items-center justify-center mb-3 transition
                ${
                  folder.isNew
                    ? "bg-white border border-gray-100"
                    : "bg-[#f1ecff]"
                }
                group-hover:-translate-y-1`}
              >
                {folder.isNew ? (
                  <FilePlus className="w-12 h-12 text-gray-300" />
                ) : (
                  <Folder className="w-14 h-14 text-[#7b5cff]" fill="#7b5cff" />
                )}
              </div>
              <p className="text-sm font-semibold">{folder.name}</p>
            </button>
          ))}
        </div>

        <aside className="w-36 h-72 bg-white rounded-xl shadow-xl border border-gray-100 p-4">
          <h3 className="font-bold text-sm mb-4">채팅</h3>

          <div className="space-y-3">
            {chatList.map((chat) => (
              <div
                key={chat}
                className="flex justify-between items-center border-b pb-2 text-xs"
              >
                <span>{chat}</span>
                <MoreVertical className="w-3 h-3 text-gray-400" />
              </div>
            ))}
          </div>
        </aside>
      </section>

      {isModalOpen && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/20">
          <div className="w-80 rounded-xl bg-white p-8 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4"
            >
              <X className="w-4 h-4" />
            </button>

            <h2 className="text-xl font-bold text-center mb-8">
              새로운 폴더 만들기
            </h2>

            <input
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="폴더 이름"
              className="w-full h-11 border border-gray-200 rounded px-3 mb-3 text-sm outline-none"
            />

            <select
              value={selectedChat}
              onChange={(e) => setSelectedChat(e.target.value)}
              className="w-full h-11 border border-gray-200 rounded px-3 mb-6 text-sm outline-none text-gray-500"
            >
              <option value="">채팅 선택하기</option>
              {chatList.map((chat) => (
                <option key={chat} value={chat}>
                  {chat}
                </option>
              ))}
            </select>

            <button
              onClick={handleCreateFolder}
              className="w-full h-11 rounded-lg bg-gray-100 text-sm font-semibold hover:bg-[#6b3cff] hover:text-white transition"
            >
              만들기
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function BackgroundBlur() {
  return (
    <div className="absolute left-1/2 top-1/2 w-[520px] h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 blur-3xl opacity-70" />
  );
}