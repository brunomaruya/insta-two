"use client";
import React from "react";
import { sideBarItens } from "../json/sideBarItens";
import {
  AtSymbolIcon,
  Bars3Icon,
  CameraIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "@/images/camera.png";
import Link from "next/link";
import SideBarItems from "./SideBarItems";
import SidebarLogo from "./SidebarLogo";
import SidebarFooterItems from "./SidebarFooterItems";

export default function Sidebar() {
  return (
    <div className="sidebarStyles ">
      <div className="flex flex-col gap-5">
        <SidebarLogo />
        <SideBarItems />
      </div>
      <SidebarFooterItems />
    </div>
  );
}
