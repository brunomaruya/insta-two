import React from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
  TvIcon,
  ChatBubbleBottomCenterTextIcon,
  BellIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconAct,
  MagnifyingGlassIcon as MagnifyingGlassIconAct,
  GlobeAltIcon as GlobeAltIconAct,
  TvIcon as TvIconAct,
  ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconAct,
  BellIcon as BellIconAct,
  PlusCircleIcon as PlusCircleIconAct,
  UserCircleIcon as UserCircleIconAct,
} from "@heroicons/react/24/solid";
import ThemeSwitcher from "./common/ThemeSwitcher";

export default function SideBarItems() {
  return (
    <div className="flex flex-col ">
      <li className="list">
        <span>
          <HomeIcon className="icon-size" />
        </span>
        <span className="list-item-text">Home</span>
      </li>
      <li className="list">
        <span>
          <MagnifyingGlassIcon className="icon-size" />
        </span>
        <span className="list-item-text">Search</span>
      </li>
      <li className="list">
        <span>
          <GlobeAltIcon className="icon-size" />
        </span>
        <span className="list-item-text">Explore</span>
      </li>
      <li className="list">
        <span>
          <TvIcon className="icon-size" />
        </span>
        <span className="list-item-text">Reels</span>
      </li>
      <li className="list">
        <span>
          <ChatBubbleBottomCenterTextIcon className="icon-size" />
        </span>
        <span className="list-item-text">Messages</span>
      </li>
      <li className="list">
        <span>
          <BellIcon className="icon-size" />
        </span>
        <span className="list-item-text">Notifications</span>
      </li>
      <li className="list">
        <span>
          <PlusCircleIcon className="icon-size" />
        </span>
        <span className="list-item-text">Post</span>
      </li>
      <li className="list">
        <span>
          <UserCircleIcon className="icon-size" />
        </span>
        <span className="list-item-text">Profile</span>
      </li>
    </div>
  );
}
