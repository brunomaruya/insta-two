"use client";
import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function ThemeSwitcher() {
  const [cookies, setCookie] = useCookies(["isThemeToggleSelected"]);

  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const changeTheme = (isSelected: boolean) => {
    setCookie("isThemeToggleSelected", !isSelected);
    isSelected ? setTheme("light") : setTheme("dark");
  };

  return (
    <div>
      <Switch
        isSelected={cookies.isThemeToggleSelected}
        onValueChange={() => changeTheme(cookies.isThemeToggleSelected)}
        aria-label="Automatic updates"
      />
    </div>
  );
}
