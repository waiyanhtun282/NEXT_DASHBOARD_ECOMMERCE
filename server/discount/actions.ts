"use server";
import { prisma } from "@/lib/prisma";
import { routes } from "@/routes/routes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import zod from "zod";

const schema = zod.object({
  name: zod.string(),
  discountType: zod.string(),
  value: zod.string(),
  startDate: zod.date(),
  endDate: zod.date(),
  description: zod.string(),
});

export async function createDiscount(formData: FormData) {
  await prisma.discount.create({
    data: schema.parse({
      name: formData.get("name") || "",
      discountType: formData.get("discountType") || "",
      value: formData.get("value") || "",
      startDate: new Date(formData.get("startDate") as string),
      endDate: new Date(formData.get("endDate") as string),
      description: formData.get("description") || "",
    }),
  });

  revalidatePath(routes.discounts.main);
  redirect(`${routes.discounts.main}?status=success`);
}

export async function editDiscount(id: string, formData: FormData) {
  await prisma.discount.update({
    where: { id },
    data: schema.parse({
      name: formData.get("name") || "",
      discountType: formData.get("discountType") || "",
      value: formData.get("value") || "",
      startDate: new Date(formData.get("startDate") as string),
      endDate: new Date(formData.get("endDate") as string),
      description: formData.get("description") || "",
    }),
  });

  revalidatePath(routes.discounts.main);
  redirect(`${routes.discounts.main}`);
}

export async function deleteDiscount(id: string) {
  await prisma.discount.delete({ where: { id } });

  revalidatePath(routes.discounts.main);
}
