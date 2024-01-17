import React from "react";
import { navItems } from "./navItems";
import SideBarItem from "./SideBarItem";
import Link from "next/link";
import { Button } from "../ui/button";

export default function SideBar() {
  return (
    <div className=" px-3 border-r-[1px] h-screen overflow-y-auto">
      <div className=" h-[45px] flex items-center">
        <h1 className=" font-bold text-xl">Next Commerce</h1>
      </div>
      <hr className=" my-3" />
      <ul className=" space-y-1 relative h-[90vh]">
        {navItems.map((nav) => (
          <SideBarItem key={nav.id} nav={nav} />
        ))}
        <Link href={"/"} className=" absolute bottom-5 left-0 right-0">
          <Button className=" w-full">Log Out</Button>
        </Link>
      </ul>
    </div>
  );
}
