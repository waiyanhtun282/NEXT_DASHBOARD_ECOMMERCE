import BackButton from "@/components/actions/BackButton";
import SubmitButton from "@/components/actions/SubmitButton";
import { prisma } from "@/lib/prisma";
import { routes } from "@/routes/routes";
import { createProduct } from "@/server/product/actions";
import React from "react";

export default async function CreateProduct() {
  const brands = await prisma.brand.findMany();
  const categories = await prisma.category.findMany();
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" md:px-5">
        <form action={createProduct} className=" space-y-4">
          <BackButton name="Products" link={routes.products.main} />
          <h2 className=" text-xl font-bold">Create a new Product</h2>
          <div className=" grid lg:grid-cols-2 lg:gap-5">
            <div className="">
              <label htmlFor="name" className=" block mb-1 text-gray-500">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className=" p-3 rounded-md border focus:outline-none w-full"
                placeholder="Products name"
                autoComplete="off"
              />
            </div>
            <div className="">
              <label htmlFor="price" className=" block mb-1 text-gray-500">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className=" p-3 rounded-md border focus:outline-none w-full"
                placeholder="Products Price"
                autoComplete="off"
              />
            </div>
            <div className="">
              <label htmlFor="brand" className=" block mb-1 text-gray-500">
                Brand
              </label>
              <select
                name="brandId"
                id="brand"
                className="p-3 rounded-md border focus:outline-none w-full"
              >
                {brands.map((brand, index) => (
                  <option value={brand.id} key={index}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <label htmlFor="category" className=" block mb-1 text-gray-500">
                Category
              </label>
              <select
                name="categoryId"
                id="category"
                className="p-3 rounded-md border focus:outline-none w-full"
              >
                {categories.map((category, index) => (
                  <option value={category.id} key={index}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <label htmlFor="desc" className=" block mb-1 text-gray-500">
                Description
              </label>
              <textarea
                name="description"
                id="desc"
                className=" p-3 rounded-md border focus:outline-none w-full"
                placeholder="Products description"
                cols={30}
                rows={3}
              ></textarea>
            </div>
          </div>
          <SubmitButton name="Create" className=" w-[100px]" />
        </form>
      </div>
    </div>
  );
}
