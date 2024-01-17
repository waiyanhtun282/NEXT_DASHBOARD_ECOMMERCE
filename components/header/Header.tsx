import React from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

export default function Header() {
  return (
    <nav className=" w-full sticky top-0 left-0 right-0 bg-white flex justify-between items-center px-5 py-2 border-b-2">
      <div className="">
        <input
          type="text"
          className=" md:w-[400px] px-3 py-2 border focus:outline-none focus:border-gray-600 rounded-full"
          placeholder="search here ..."
        />
      </div>
      <div className=" flex items-center gap-3">
        <Switch id="theme" />
        <Label htmlFor={"theme"} className={" text-base"}>
          Dark Mode
        </Label>
      </div>
    </nav>
  );
}
