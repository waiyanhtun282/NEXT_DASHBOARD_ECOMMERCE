import BackButton from "@/components/actions/BackButton";
import SubmitButton from "@/components/actions/SubmitButton";
import { routes } from "@/routes/routes";
import { createCategory } from "@/server/catgory/actions";
import React from "react";

export default function CategoryCreatePage() {
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" md:px-5">
        <form action={createCategory} className=" space-y-4">
          <BackButton name="Categories" link={routes.categories.main} />
          <h2 className=" text-xl font-bold">Create a new category</h2>
          <div className="">
            <label htmlFor="name" className=" block mb-1 text-gray-500">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className=" p-3 rounded-md border focus:outline-none min-w-[400px]"
              placeholder="Category name"
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
              placeholder="Category description"
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
