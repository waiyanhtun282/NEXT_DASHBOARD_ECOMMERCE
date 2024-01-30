import DeleteButton from "@/components/actions/DeleteButton";
import EditButton from "@/components/actions/EditButton";
import { routes } from "@/routes/routes";
import { deleteCategory } from "@/server/catgory/actions";
import React from "react";

interface Category {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const heads = ["No", "Name", "Description", ""];

export default function CategoriesTable({
  categories,
}: {
  categories: Category[];
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
          {categories.map((cate, index: number) => (
            <tr key={cate.id}>
              <td className=" p-4 border-b border-slate-200">{index + 1}</td>
              <td className=" p-4 border-b border-slate-200">{cate.name}</td>
              <td className=" p-4 border-b border-slate-200">
                {cate.description}
              </td>
              <td className=" p-4 border-b border-slate-200">
                <div className=" flex items-center gap-3">
                  <DeleteButton action={deleteCategory.bind(null, cate.id)} />
                  <EditButton
                    link={`${routes.categories.edit}?id=${cate.id}`}
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
