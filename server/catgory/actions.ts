"use server";

import { prisma } from "@/lib/prisma";
import { routes } from "@/routes/routes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCategory(formData: FormData) {
  await prisma.category.create({
    data: {
      name: (formData.get("name") as string) || "",
      description: (formData.get("description") as string) || "",
    },
  });

  revalidatePath(routes.categories.main);
  redirect(`${routes.categories.main}?status=success`);
}
