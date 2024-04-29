import ProfileHeader from "@/components/ProfileComponents/ProfileHeader";
import ProfileStories from "@/components/ProfileComponents/ProfileStories";
import ProfileTabs from "@/components/ProfileComponents/ProfileTabs";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import React from "react";

interface IUser {
  params: {
    user: string;
  };
}
const imageUrl =
  "https://images.unsplash.com/photo-1714234073569-50c68b5feb4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function page({ params }: IUser) {
  return (
    <div className="w-full flex  justify-center items-center">
      <div className="w-[700px] flex flex-col gap-14">
        <ProfileHeader userName={params.user} imageUrl={imageUrl} />
        <ProfileStories />

        <ProfileTabs />
      </div>
    </div>
  );
}
