import BackButton from "@/components/actions/BackButton";
import SubmitButton from "@/components/actions/SubmitButton";
import { prisma } from "@/lib/prisma";
import { routes } from "@/routes/routes";
import { editProduct } from "@/server/product/actions";
import React from "react";

export default async function EditProduct({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const product = await prisma.product.findUnique({
    where: { id: searchParams.id },
  });
  const brands = await prisma.brand.findMany();
  const categories = await prisma.category.findMany();
  const discounts = await prisma.discount.findMany();
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" md:px-5">
        <form
          action={editProduct.bind(null, searchParams.id)}
          className=" space-y-4"
        >
          <BackButton name="Products" link={routes.products.main} />
          <h2 className=" text-xl font-bold">Edit Product</h2>
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
                defaultValue={product?.name || ""}
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
                defaultValue={product?.price || ""}
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
                defaultValue={product?.brandId || ""}
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
                defaultValue={product?.categoryId || ""}
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
                defaultValue={product?.description || ""}
                cols={30}
                rows={3}
              ></textarea>
            </div>
            <div className="">
              <label htmlFor="category" className=" block mb-1 text-gray-500">
                Discount
              </label>
              <select
                name="discountId"
                id="discount"
                className="p-3 rounded-md border focus:outline-none w-full"
                defaultValue={product?.discountId as any}
              >
                <option value="">None</option>
                {discounts.map((discount, index) => (
                  <option value={discount.id} key={index}>
                    {discount.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <SubmitButton name="Update" className=" w-[100px]" />
        </form>
      </div>
    </div>
  );
}
