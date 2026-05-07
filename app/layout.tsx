import type { Metadata } from "next";
import "./globals.css";
import MainLayout from './components/layout/MainLayout'

export const metadata: Metadata = {
  title: "LawEasy",
  description: "LawEasy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
