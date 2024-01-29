import CreateButton from "@/components/actions/CreateButton";
import Popup from "@/components/layouts/toast/Popup";
import { routes } from "@/routes/routes";
import React from "react";
import BrandsTable from "./BrandsTable";
import { prisma } from "@/lib/prisma";

export default async function BrandsPage() {
  const brands = await prisma.brand.findMany();
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Brands</h1>
        <CreateButton name="Create Brands" link={routes.brands.create} />
      </div>
      <BrandsTable brands={brands} />
      <Popup
        title="Category create is successful !"
        description=""
        className=" border-b-4 border-b-green-400"
      />
    </div>
  );
}
