import CreateButton from "@/components/actions/CreateButton";
import Popup from "@/components/layouts/toast/Popup";
import { routes } from "@/routes/routes";
import React from "react";
import CategoriesTable from "./CategoriesTable";
import { prisma } from "@/lib/prisma";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany();
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Categories</h1>
        <CreateButton name="Create Category" link={routes.categories.create} />
      </div>
      <CategoriesTable categories={categories} />
      <Popup
        title="Category create is successful !"
        description=""
        className=" border-b-4 border-b-green-400"
      />
    </div>
  );
}
