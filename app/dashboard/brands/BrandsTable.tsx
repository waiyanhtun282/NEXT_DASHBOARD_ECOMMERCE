import DeleteButton from "@/components/actions/DeleteButton";
import EditButton from "@/components/actions/EditButton";
import { routes } from "@/routes/routes";
import { deleteBrand } from "@/server/brand/action";
import React from "react";
interface Brands {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}
const heads = ["No", "Name", "Description", ""];
export default function BrandsTable({ brands }: { brands: Brands[] }) {
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
          {brands.map((brand, index: number) => (
            <tr key={brand.id}>
              <td className=" p-4 border-b border-slate-200">{index + 1}</td>
              <td className=" p-4 border-b border-slate-200">{brand.name}</td>
              <td className=" p-4 border-b border-slate-200">
                {brand.description}
              </td>
              <td className=" p-4 border-b border-slate-200">
                <div className=" flex items-center gap-3">
                  <DeleteButton action={deleteBrand.bind(null, brand.id)} />
                  <EditButton link={`${routes.brands.edit}?id=${brand.id}`} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
