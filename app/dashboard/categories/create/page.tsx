import SubmitButton from "@/components/actions/SubmitButton";
import { createCategory } from "@/server/catgory/actions";
import React from "react";

export default function CategoryCreatePage() {
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className="">
        <form action={createCategory}>
          <div className="">
            <input
              type="text"
              name="name"
              id=""
              className=" p-2 rounded-md border focus:outline-none"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="description"
              id=""
              className=" p-2 rounded-md border focus:outline-none"
            />
          </div>
          <SubmitButton name="Create" className="" />
        </form>
      </div>
    </div>
  );
}
