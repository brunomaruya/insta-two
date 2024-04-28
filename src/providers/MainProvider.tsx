"use client";
import { NextUIProvider } from "@nextui-org/system";
import React, { ReactNode } from "react";
import { CookiesProvider } from "react-cookie";
import TProvider from "./TProvider";

export default function MainProvider({ children }: { children: ReactNode }) {
  return (
    <CookiesProvider>
      <NextUIProvider>
        <TProvider>{children}</TProvider>
      </NextUIProvider>
    </CookiesProvider>
  );
}
