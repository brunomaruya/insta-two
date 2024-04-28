import React from "react";
import SearchBar from "./common/SearchBar";
import { BellIcon } from "@heroicons/react/24/outline";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between py-2 px-4 border-b-[2px] md:hidden fixed w-full top-0 ">
      <span className="logo">InstaTwo</span>
      <div className="flex items-center gap-5">
        <SearchBar />
        <BellIcon className="icon-size " />
      </div>
    </div>
  );
}
