"use server";
import zod from "zod";

import { prisma } from "@/lib/prisma";
import { routes } from "@/routes/routes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const schema = zod.object({
  name: zod.string(),
  description: zod.string(),
});

export async function createCategory(formData: FormData) {
  await prisma.category.create({
    data: schema.parse({
      name: formData.get("name") || "",
      description: formData.get("description") || "",
    }),
  });

  revalidatePath(routes.categories.main);
  redirect(`${routes.categories.main}?status=success`);
}

export async function editCategory(id: string, formData: FormData) {
  await prisma.category.update({
    where: { id },
    data: schema.parse({
      name: formData.get("name") || "",
      description: formData.get("description") || "",
    }),
  });

  revalidatePath(routes.categories.main);
  redirect(`${routes.categories.main}`);
}

export async function deleteCategory(id: string) {
  await prisma.category.delete({ where: { id } });

  revalidatePath(routes.categories.main);
}
