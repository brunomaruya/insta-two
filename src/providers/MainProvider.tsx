"use client";
import { NextUIProvider } from "@nextui-org/system";
import React, { ReactNode } from "react";
import { CookiesProvider } from "react-cookie";
import TProvider from "./TProvider";
import CurrentUserProvider from "@/app/context/CurrentUser";

export default function MainProvider({ children }: { children: ReactNode }) {
  return (
    <CookiesProvider>
      <NextUIProvider>
        <CurrentUserProvider>
          <TProvider>{children}</TProvider>
        </CurrentUserProvider>
      </NextUIProvider>
    </CookiesProvider>
  );
}
