import Image from "next/image";
import Sidebar from "../components/Sidebar";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";

export default function Home() {
  return (
    <div className="md:flex justify-between w-full">
      <Sidebar />
      <TopBar />
      <div className="mt-[58px]">
        <h1>Hello World</h1>
      </div>

      <BottomBar />
    </div>
  );
}
