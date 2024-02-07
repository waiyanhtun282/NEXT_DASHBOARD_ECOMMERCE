"use server";

import { prisma } from "@/lib/prisma";
import { routes } from "@/routes/routes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import zod from "zod";

const schema = zod.object({
  name: zod.string(),
  price: zod.number(),
  description: zod.string(),
  brandId: zod.string(),
  categoryId: zod.string(),
  discountId: zod.string().nullable(),
});

export async function createProduct(formData: FormData) {
  await prisma.product.create({
    data: schema.parse({
      name: formData.get("name") || "",
      price: Number(formData.get("price")) || 0,
      description: formData.get("description") || "",
      brandId: formData.get("brandId"),
      categoryId: formData.get("categoryId"),
      discountId: formData.get("discountId") || null,
    }),
  });

  revalidatePath(routes.products.main);
  redirect(`${routes.products.main}?status=success`);
}

export async function editProduct(id: string, formData: FormData) {
  await prisma.product.update({
    where: { id },
    data: schema.parse({
      name: formData.get("name") || "",
      price: Number(formData.get("price")) || 0,
      description: formData.get("description") || "",
      brandId: formData.get("brandId"),
      categoryId: formData.get("categoryId"),
      discountId: formData.get("discountId") || null,
    }),
  });

  revalidatePath(routes.products.main);
  redirect(`${routes.products.main}`);
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({ where: { id } });

  revalidatePath(routes.products.main);
}
