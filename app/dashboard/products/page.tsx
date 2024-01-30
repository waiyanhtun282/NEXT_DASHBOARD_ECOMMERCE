import CreateButton from "@/components/actions/CreateButton";
import { routes } from "@/routes/routes";
import React from "react";
import ProductsTable from "./ProductsTable";
import { prisma } from "@/lib/prisma";
import Popup from "@/components/layouts/toast/Popup";
import Image from "next/image";

export default async function ProductsPage() {
  const products = await prisma.product.findMany();
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Products</h1>
        <CreateButton name="Create Product" link={routes.products.create} />
      </div>
      {products.length > 0 ? (
        <ProductsTable products={products} />
      ) : (
        <div className=" min-h-[50vh] grid place-items-center">
          <div className=" text-center">
            <Image src={"/empty.gif"} alt="empty" width={150} height={150} />
            <p className=" mt-5 text-gray-500">Empty data !</p>
          </div>
        </div>
      )}
      <Popup
        title="Product create is Successful !"
        description=""
        className=" border-b-4 border-b-green-400"
      />
    </div>
  );
}
