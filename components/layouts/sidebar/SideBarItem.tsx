"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function SideBarItem({
  nav,
}: {
  nav: { name: string; link: string };
}) {
  const pathname = usePathname();
  const isActive = pathname === nav.link;
  const router = useRouter();
  return (
    <li
      className={` p-3 font-medium rounded-md cursor-pointer ${
        isActive ? " bg-blue-100 text-blue-600" : ""
      }`}
      onClick={() => router.push(nav.link)}
    >
      {nav.name}
    </li>
  );
}
