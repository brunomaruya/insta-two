import { AtSymbolIcon, Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";
import MoreModal from "./MoreModal";

export default function SidebarFooterItems() {
  return (
    <div className="flex flex-col ">
      <li className="list">
        <span>
          <AtSymbolIcon className="icon-size" />
        </span>
        <span className="list-item-text">Threads</span>
      </li>

      <MoreModal />
    </div>
  );
}
