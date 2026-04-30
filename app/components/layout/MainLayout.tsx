import Header from "./Header";
//import Sidebar from "./Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      

      <div className="ml-64">
        <Header />

        <main className="px-8 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}