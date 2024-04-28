import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function SearchBar() {
  return (
    <div className="bg-gray-300 rounded-md flex items-center px-2 ">
      <MagnifyingGlassIcon className="h-5 w-5" />
      <input
        type="text"
        className="bg-transparent py-2 px-4 focus:outline-none"
      />
    </div>
  );
}
