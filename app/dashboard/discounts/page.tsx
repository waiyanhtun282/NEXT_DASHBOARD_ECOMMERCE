import CreateButton from "@/components/actions/CreateButton";
import Popup from "@/components/layouts/toast/Popup";
import { prisma } from "@/lib/prisma";
import { routes } from "@/routes/routes";
import Image from "next/image";
import React from "react";
import DiscountsTable from "./DiscountsTable";

export default async function DiscountsPage() {
  const discounts = await prisma.discount.findMany();
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Discounts</h1>
        <CreateButton name="Create Discount" link={routes.discounts.create} />
      </div>
      {discounts.length > 0 ? (
        <DiscountsTable discounts={discounts} />
      ) : (
        <div className=" min-h-[50vh] grid place-items-center">
          <div className=" text-center">
            <Image src={"/empty.gif"} alt="empty" width={150} height={150} />
            <p className=" mt-5 text-gray-500">Empty data !</p>
          </div>
        </div>
      )}
      <Popup
        title="Discount create is successful !"
        description=""
        className=" border-b-4 border-b-green-400"
      />
    </div>
  );
}
