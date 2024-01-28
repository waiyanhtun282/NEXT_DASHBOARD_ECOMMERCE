import BackButton from "@/components/actions/BackButton";
import SubmitButton from "@/components/actions/SubmitButton";
import { prisma } from "@/lib/prisma";
import { routes } from "@/routes/routes";
import { editCategory } from "@/server/catgory/actions";
import React from "react";

export default async function EditCategoryPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const category = await prisma.category.findUnique({
    where: { id: searchParams.id },
  });
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" md:px-5">
        <form
          action={editCategory.bind(null, searchParams.id)}
          className=" space-y-4"
        >
          <BackButton name="Categories" link={routes.categories.main} />
          <h2 className=" text-xl font-bold">Edit category</h2>
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
              defaultValue={category?.name || ""}
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
              defaultValue={category?.description || ""}
              cols={30}
              rows={3}
            ></textarea>
          </div>
          <SubmitButton name="Update" className=" w-[100px]" />
        </form>
      </div>
    </div>
  );
}
