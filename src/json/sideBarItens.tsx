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
import Router from "next/navigation";
import { useRouter } from "next/router";

export const sideBarItens = [
  {
    title: "Home",
    icon: <HomeIcon className="icon-size" />,
    actIcon: <HomeIconAct className="icon-size" />,
    onclick: console.log("test"),
  },
  {
    title: "Search",
    icon: <MagnifyingGlassIcon className="icon-size" />,
    actIcon: <MagnifyingGlassIconAct className="icon-size" />,
  },
  {
    title: "Explore",
    icon: <GlobeAltIcon className="icon-size" />,
    actIcon: <GlobeAltIconAct className="icon-size" />,
  },
  {
    title: "Reels",
    icon: <TvIcon className="icon-size" />,
    actIcon: <TvIconAct className="icon-size" />,
  },
  {
    title: "Messages",
    icon: <ChatBubbleBottomCenterTextIcon className="icon-size" />,
    actIcon: <ChatBubbleBottomCenterTextIconAct className="icon-size" />,
  },
  {
    title: "Notifications",
    icon: <BellIcon className="icon-size" />,
    actIcon: <BellIconAct className="icon-size" />,
  },
  {
    title: "Post",
    icon: <PlusCircleIcon className="icon-size" />,
    actIcon: <PlusCircleIconAct className="icon-size" />,
  },
  {
    title: "Profile",
    icon: <UserCircleIcon className="icon-size" />,
    actIcon: <UserCircleIconAct className="icon-size" />,
  },
];
