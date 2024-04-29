"use client";
import React from "react";
import ThemeSwitcher from "./common/ThemeSwitcher";
import { ModalContent } from "@nextui-org/modal";
import { Divider } from "@nextui-org/divider";
import {
  BookmarkIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function ModalContentComp() {
  const listStyle =
    " list-none py-4 px-5 flex items-center gap-5 cursor-pointer hover:bg-[var(--secondary)] rounded-lg  duration-100 ";
  const iconSize = "h-6 w-6 cursor-pointer";
  const listItemText = "text-md";
  return (
    <ModalContent className="p-0">
      <li className={listStyle}>
        <span>
          <Cog6ToothIcon className={iconSize} />
        </span>
        <span className={listItemText}>Settings</span>
      </li>

      <li className={listStyle}>
        <span>
          <ChartBarSquareIcon className={iconSize} />
        </span>
        <span className={listItemText}>Your Activity</span>
      </li>

      <li className={listStyle}>
        <span>
          <BookmarkIcon className={iconSize} />
        </span>
        <span className={listItemText}>Saves</span>
      </li>

      <li className={listStyle}>
        <span>
          <MoonIcon className={iconSize} />
        </span>
        <span className={listItemText}>
          <ThemeSwitcher />
        </span>
      </li>

      <li className={listStyle}>
        <span>
          <ExclamationTriangleIcon className={iconSize} />
        </span>
        <span className={listItemText}>Report a problem</span>
      </li>
      <Divider className="h-1" />

      <li className={listStyle}>
        <span className={listItemText}>Change Account</span>
      </li>
      <Divider />
      <li className={listStyle}>
        <span
          className={listItemText}
          onClick={() => (window.location.href = "/auth/sign-in")}
        >
          Sign out
        </span>
      </li>
    </ModalContent>
  );
}
