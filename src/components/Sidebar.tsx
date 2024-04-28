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

export default function Sidebar() {
  return (
    <div className="sidebarStyles ">
      <div className="flex flex-col gap-5">
        <SidebarLogo />
        <SideBarItems />
      </div>
      <div className="flex flex-col ">
        <li className="list">
          <span>
            <AtSymbolIcon className="icon-size" />
          </span>
          <span className="list-item-text">Threads</span>
        </li>
        <li className="list">
          <span>
            <Bars3Icon className="icon-size" />
          </span>
          <span className="list-item-text">More</span>
        </li>
      </div>
    </div>
  );
}
