import CreateButton from "@/components/actions/CreateButton";
import Popup from "@/components/layouts/toast/Popup";
import { routes } from "@/routes/routes";
import React from "react";

export default function CategoriesPage() {
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Categories</h1>
        <CreateButton name="Create Category" link={routes.categories.create} />
      </div>
      <Popup title="Create success !" description="hello" className="" />
    </div>
  );
}
