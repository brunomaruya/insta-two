import { CameraIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function SidebarLogo() {
  return (
    <>
      <Link href="/">
        <span className="logo h-20 py-5 px-5 cursor-pointer xl:block hidden ">
          InstaTwo
        </span>
      </Link>
      <Link href="/">
        <span className="logo h-20  py-5 px-5 cursor-pointer block xl:hidden  ">
          <CameraIcon className="icon-size" />
        </span>
      </Link>
    </>
  );
}
