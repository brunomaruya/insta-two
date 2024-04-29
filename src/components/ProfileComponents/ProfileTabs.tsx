"use client";
import { Divider } from "@nextui-org/divider";
import { Tabs, Tab } from "@nextui-org/tabs";
import React from "react";

export default function ProfileTabs() {
  return (
    <div className="flex items-center flex-col">
      <Divider />
      <Tabs aria-label="Options " variant="light">
        <Tab key="posts" title="POSTS"></Tab>
        <Tab key="save" title="SAVED"></Tab>
        <Tab key="tagged" title="TAGGED"></Tab>
      </Tabs>
    </div>
  );
}
