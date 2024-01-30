import BackButton from "@/components/actions/BackButton";
import SubmitButton from "@/components/actions/SubmitButton";
import { routes } from "@/routes/routes";
import { createProdcuts } from "@/server/product/actions";
import React from "react";

export default function CreateProduct() {
  return (
   <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" md:px-5">
        <form action={createProdcuts}
          className=" space-y-4"
        >
          <BackButton name="Brands" link={routes.products.main} />
          <h2 className=" text-xl font-bold">Create Products</h2>
          <div className="">
            <label htmlFor="name" className=" block mb-1 text-gray-500">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className=" p-3 rounded-md border focus:outline-none min-w-[400px]"
              placeholder="Products name"
              autoComplete="off"
            />
          </div>
            <div className="">
            <label htmlFor="price" className=" block mb-1 text-gray-500">
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className=" p-3 rounded-md border focus:outline-none min-w-[400px]"
              placeholder="Products Price"
              autoComplete="off"
            />
          </div>
          <div className="">
            <label htmlFor="desc" className=" block mb-1 text-gray-500">
              Description
            </label>
            <textarea
              name="description"
              id="desc"
              className=" p-3 rounded-md border focus:outline-none min-w-[400px]"
              placeholder="Products description"
              cols={30}
              rows={3}
            ></textarea>
          </div>
          <SubmitButton name="Create" className=" w-[100px]" />
        </form>
      </div>
    </div>
  );
}
