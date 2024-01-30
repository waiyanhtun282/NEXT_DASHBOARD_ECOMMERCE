import CreateButton from "@/components/actions/CreateButton";
import Popup from "@/components/layouts/toast/Popup";
import { routes } from "@/routes/routes";
import React from "react";
import CategoriesTable from "./CategoriesTable";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany();
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Categories</h1>
        <CreateButton name="Create Category" link={routes.categories.create} />
      </div>
      {categories.length > 0 ? (
        <CategoriesTable categories={categories} />
      ) : (
        <div className=" min-h-[50vh] grid place-items-center">
          <div className=" text-center">
            <Image src={"/empty.gif"} alt="empty" width={150} height={150} />
            <p className=" mt-5 text-gray-500">Empty data !</p>
          </div>
        </div>
      )}
      <Popup
        title="Category create is successful !"
        description=""
        className=" border-b-4 border-b-green-400"
      />
    </div>
  );
}
