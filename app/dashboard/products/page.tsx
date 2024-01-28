import CreateButton from "@/components/actions/CreateButton";
import { routes } from "@/routes/routes";
import React from "react";

export default function ProductsPage() {
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Products</h1>
        <CreateButton name="Create Product" link={routes.products.create} />
      </div>
    </div>
  );
}
