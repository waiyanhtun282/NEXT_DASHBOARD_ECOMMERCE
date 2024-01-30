import DeleteButton from "@/components/actions/DeleteButton";
import EditButton from "@/components/actions/EditButton";
import { routes } from "@/routes/routes";
import { deleteProduct } from "@/server/product/actions";
import React from "react";
interface Products {
  id: string;
  name: string;
  description: string | null;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
const heads = ["No", "Name", "Description", "Price", ""];
export default function ProductsTable({ products }: { products: Products[] }) {
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
          {products.map((product, index: number) => (
            <tr key={product.id}>
              <td className=" p-4 border-b border-slate-200">{index + 1}</td>
              <td className=" p-4 border-b border-slate-200">{product.name}</td>
              <td className=" p-4 border-b border-slate-200">
                {product.description}
              </td>
              <td className=" p-4 border-b border-slate-200">
                {product.price}
              </td>
              <td className=" p-4 border-b border-slate-200">
                <div className=" flex items-center gap-3">
                  <DeleteButton action={deleteProduct.bind(null, product.id)} />
                  <EditButton
                    link={`${routes.products.edit}?id=${product.id}`}
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
