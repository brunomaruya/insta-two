import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TProvider from "@/providers/TProvider";
import { NextUIProvider } from "@nextui-org/system";
import { CookiesProvider } from "react-cookie";
import MainProvider from "@/providers/MainProvider";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InstaTwo",
  description: "Copy of Instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainProvider>
          <div className="md:flex   w-full">
            <Sidebar />
            <TopBar />
            <div className="mt-[58px] md:mt-8 w-full">{children}</div>
            <BottomBar />
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
