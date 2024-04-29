import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import React from "react";

export default function ProfileStories() {
  return (
    <div className="flex justify-start">
      <Button className="h-20 w-20 rounded-full outline-1 outline-gray-600 outline-offset-4">
        <PlusIcon className="h-16 w-16" />
      </Button>
    </div>
  );
}
