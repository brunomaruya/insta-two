import React from "react";
import { sideBarItens } from "../json/sideBarItens";

export default function BottomBar() {
  return (
    <div className="border-t-2 flex justify-between px-20 py-2 fixed bottom-0  w-full md:hidden">
      {sideBarItens
        .filter(
          (item) => item.title !== "Search" && item.title !== "Notifications"
        )
        .map((item) => (
          <div>{item.icon}</div>
        ))}
    </div>
  );
}
