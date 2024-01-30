import CreateButton from "@/components/actions/CreateButton";
import { routes } from "@/routes/routes";
import React from "react";
import ProductsTable from "./ProductsTable";
import { prisma } from "@/lib/prisma";
import Popup from "@/components/layouts/toast/Popup";

export default  async function ProductsPage() {
  const products  = await prisma.product.findMany();
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" flex justify-between items-center">
        <h1 className=" font-medium text-lg">Products</h1>
        <CreateButton name="Create Product" link={routes.products.create} />
      </div>
      <ProductsTable products={products}/>
      <Popup  title="Brands Create Successfully!"
       description=""
        className=" border-b-4 border-b-green-400"
       />
    </div>
  );
}
