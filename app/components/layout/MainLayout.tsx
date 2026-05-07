import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
        <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
            <div
                className="absolute w-[700px] h-[700px]
                bg-purple-200 opacity-40 blur-[140px] rounded-full
                top-[58%] left-[55%]
                -translate-x-1/2 -translate-y-1/2"
                />

            <div
            className="absolute w-[520px] h-[520px]
            bg-pink-200 opacity-40 blur-[120px] rounded-full
            top-[62%] left-[42%]
            -translate-x-1/2 -translate-y-1/2"
            />
        </div>

        <div className="relative z-10 flex min-h-screen">
            <Sidebar />

            <div className="flex min-w-0 flex-1 flex-col">
                <Header />

                <main className="flex-1 px-8 py-6 bg-transparent">
                    {children}
                </main>
            </div>
        </div>
    </div>
  );
}