"use client";
import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { isElement } from "react-dom/test-utils";

export default function ThemeSwitcher() {
  const [isSelected, setIsSelected] = React.useState(true);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const changeTheme = (isSelected: boolean) => {
    setIsSelected(!isSelected);
    isSelected ? setTheme("light") : setTheme("dark");
  };
  return (
    <div>
      <Switch
        isSelected={isSelected}
        onValueChange={() => changeTheme(isSelected)}
        aria-label="Automatic updates"
      />
    </div>
  );
}
