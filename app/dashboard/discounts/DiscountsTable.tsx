import DeleteButton from "@/components/actions/DeleteButton";
import EditButton from "@/components/actions/EditButton";
import { formatDate } from "@/lib/helper";
import { routes } from "@/routes/routes";
import { deleteDiscount } from "@/server/discount/actions";
import React from "react";
interface Discounts {
  id: string;
  name: string;
  description: string | null;
  value: string;
  discountType: string;
  startDate: Date | null;
  endDate: Date | null;
  image: string | null;
}
const heads = [
  "No",
  "Name",
  "Discount Type",
  "Value",
  "Start Date",
  "End Date",
  "",
];
export default function DiscountsTable({
  discounts,
}: {
  discounts: Discounts[];
}) {
  return (
    <div className=" mt-5">
      <table className=" table w-full border-spacing-2 border-collapse">
        <thead>
          <tr className=" bg-gray-100">
            {heads.map((head) => (
              <th
                key={head}
                className=" text-start p-4 border-b border-slate-200"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {discounts.map((discount, index: number) => (
            <tr key={discount.id}>
              <td className=" p-4 border-b border-slate-200">{index + 1}</td>
              <td className=" p-4 border-b border-slate-200">
                {discount.name}
              </td>
              <td className=" p-4 border-b border-slate-200">
                {discount.discountType}
              </td>
              <td className=" p-4 border-b border-slate-200">
                {discount.value}
              </td>
              <td className=" p-4 border-b border-slate-200">
                {formatDate(discount.startDate as any)}
              </td>
              <td className=" p-4 border-b border-slate-200">
                {formatDate(discount.endDate as any)}
              </td>
              <td className=" p-4 border-b border-slate-200">
                <div className=" flex items-center gap-3">
                  <DeleteButton
                    action={deleteDiscount.bind(null, discount.id)}
                  />
                  <EditButton
                    link={`${routes.discounts.edit}?id=${discount.id}`}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
