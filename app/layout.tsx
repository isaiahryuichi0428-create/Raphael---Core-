import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAPHAEL Core",
  description: "A safe student productivity assistant dashboard MVP.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-raphael-navy bg-radial-grid`}>
        <Sidebar />
        <main className="min-h-screen px-3 py-4 sm:px-4 lg:ml-72 lg:p-8">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
