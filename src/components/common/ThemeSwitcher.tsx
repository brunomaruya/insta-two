"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
      <div>Theme: {theme}</div>
    </div>
  );
}
