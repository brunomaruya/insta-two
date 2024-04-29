import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function SearchBar() {
  return (
    <div className="bg-[var(--text)] text-[var(--background)] rounded-md flex items-center justify-center px-2 w-52 h-8">
      <MagnifyingGlassIcon className="h-5 w-5" />
      <input
        type="text"
        className="bg-transparent py-2 px-4 focus:outline-none w-full"
      />
    </div>
  );
}
