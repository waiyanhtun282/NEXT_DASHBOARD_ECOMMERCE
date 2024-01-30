import CreateButton from "@/components/actions/CreateButton";
import Popup from "@/components/layouts/toast/Popup";
import { routes } from "@/routes/routes";
import React from "react";
import BrandsTable from "./BrandsTable";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function BrandsPage() {
  const brands = await prisma.brand.findMany();
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Brands</h1>
        <CreateButton name="Create Brand" link={routes.brands.create} />
      </div>
      {brands.length > 0 ? (
        <BrandsTable brands={brands} />
      ) : (
        <div className=" min-h-[50vh] grid place-items-center">
          <div className=" text-center">
            <Image src={"/empty.gif"} alt="empty" width={150} height={150} />
            <p className=" mt-5 text-gray-500">Empty data !</p>
          </div>
        </div>
      )}
      <Popup
        title="Brand create is successful !"
        description=""
        className=" border-b-4 border-b-green-400"
      />
    </div>
  );
}
