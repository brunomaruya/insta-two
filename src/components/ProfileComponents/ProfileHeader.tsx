import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";

export default function ProfileHeader({
  imageUrl,
  userName,
}: {
  imageUrl: string;
  userName: string;
}) {
  return (
    <header className="flex items-center justify-center gap-24">
      <Image
        className="rounded-full h-44 w-44"
        src={imageUrl}
        width={200}
        height={200}
        alt="avatar"
      />
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span>{userName}</span>
          <Button>Edit profile</Button>
          <Button>Archived items</Button>
          <span>
            <Cog6ToothIcon className="icon-size" />
          </span>
        </div>
        <div className="flex items-center gap-5 ">
          <span>1 post</span>
          <span>1 follower</span>
          <span>1 following</span>
        </div>
      </div>
    </header>
  );
}
