import BackButton from "@/components/actions/BackButton";
import SubmitButton from "@/components/actions/SubmitButton";
import { routes } from "@/routes/routes";
import { createBrand } from "@/server/brand/action";
import React from "react";

export default function BrandsCreatePage() {
  return (
    <div className=" bg-white rounded-md p-3  shadow min-h-[80vh]">
      <div className=" md:mx-5">
        <form action={createBrand} className=" space-y-4">
          <BackButton name="Brands" link={routes.brands.main} />
          <h2 className=" text-xl font-bold">Create a new brand</h2>

          <div className="">
            <label htmlFor="name" className=" block mb-1 text-gray-500">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className=" p-3 rounded-md border focus:outline-none min-w-[400px]"
              placeholder="Brands name"
              autoComplete="off"
            />
          </div>
          {/* <div>
            <label htmlFor="image" className=" block mb-1 text-gray-500">
              Image
            </label>
            <input
              type="text"
              className=" p-3 rounded-md border focus:outline-none min-w-[400px]"
              name="image"
              id="image"
              placeholder="Data image link"
              // required
            />
          </div> */}

          <div className="">
            <label htmlFor="desc" className=" block mb-1 text-gray-500">
              Description
            </label>
            <textarea
              name="description"
              id="desc"
              className=" p-3 rounded-md border focus:outline-none min-w-[400px]"
              placeholder="Brands description"
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
