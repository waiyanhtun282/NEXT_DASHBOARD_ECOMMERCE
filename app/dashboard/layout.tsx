import Header from "@/components/layouts/header/Header";
import SideBar from "@/components/layouts/sidebar/SideBar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" flex">
      <div className=" w-[250px]">
        <SideBar />
      </div>
      <main className=" flex-grow h-screen overflow-y-scroll">
        <Header />
        <div className=" py-3 px-5 bg-gray-100 h-screen">{children}</div>
      </main>
      <Toaster />
    </section>
  );
}
