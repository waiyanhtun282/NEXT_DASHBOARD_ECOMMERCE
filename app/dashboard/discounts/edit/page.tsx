import BackButton from "@/components/actions/BackButton";
import SubmitButton from "@/components/actions/SubmitButton";
import { formatDate, inputFormatDate } from "@/lib/helper";
import { prisma } from "@/lib/prisma";
import { routes } from "@/routes/routes";
import { editDiscount } from "@/server/discount/actions";
import React from "react";

export default async function EditPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const discount = await prisma.discount.findUnique({
    where: { id: searchParams.id },
  });
  return (
    <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" md:px-5">
        <form
          action={editDiscount.bind(null, searchParams.id)}
          className=" space-y-4"
        >
          <BackButton name="Discounts" link={routes.discounts.main} />
          <h2 className=" text-xl font-bold">Create a new Discount</h2>
          <div className=" grid md:grid-cols-2 gap-5">
            <div className="">
              <label htmlFor="name" className=" block mb-1 text-gray-500">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className=" p-3 rounded-md border focus:outline-none w-full"
                placeholder="Discount name"
                defaultValue={discount?.name || ""}
                autoComplete="off"
                required
              />
            </div>
            <div className="">
              <label htmlFor="type" className=" block mb-1 text-gray-500">
                Discount Type
              </label>
              <select
                name="discountType"
                id="type"
                className="p-3 rounded-md border focus:outline-none w-full"
                defaultValue={discount?.discountType || ""}
                required
              >
                <option value="">None</option>
                <option value="percentage">Percentage</option>
                <option value="amount">Amount</option>
              </select>
            </div>
            <div className="">
              <label htmlFor="value" className=" block mb-1 text-gray-500">
                Value
              </label>
              <input
                type="text"
                name="value"
                id="value"
                className=" p-3 rounded-md border focus:outline-none w-full"
                placeholder="Discount value"
                defaultValue={discount?.value || ""}
                autoComplete="off"
                required
              />
            </div>
            <div className="">
              <label htmlFor="start-date" className=" block mb-1 text-gray-500">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                id="start-date"
                className=" p-3 rounded-md border focus:outline-none w-full"
                placeholder="Start Date"
                defaultValue={inputFormatDate(discount?.startDate as any)}
                autoComplete="off"
                required
              />
            </div>
            <div className="">
              <label htmlFor="desc" className=" block mb-1 text-gray-500">
                Description
              </label>
              <textarea
                name="description"
                id="desc"
                className=" p-3 rounded-md border focus:outline-none w-full"
                placeholder="Category description"
                defaultValue={discount?.description || ""}
                cols={30}
                rows={3}
                required
              ></textarea>
            </div>
            <div className="">
              <label htmlFor="end-date" className=" block mb-1 text-gray-500">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                id="end-date"
                className=" p-3 rounded-md border focus:outline-none w-full"
                placeholder="End Date"
                defaultValue={inputFormatDate(discount?.endDate as any)}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <SubmitButton name="Update" className=" w-[100px]" />
        </form>
      </div>
    </div>
  );
}
