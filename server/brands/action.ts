"use server";
import zod from "zod";

import { prisma } from "@/lib/prisma";
import { routes } from "@/routes/routes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const schema = zod.object({
  name: zod.string(),
  description: zod.string(),
  //   image: zod.string(),
});

export async function createBrands(formData: FormData) {
  await prisma.brand.create({
    data: schema.parse({
      name: formData.get("name" || ""),
      description: formData.get("description" || ""),
    }),
  });
  revalidatePath(routes.brands.main);
  redirect(`${routes.brands.main}?status=success`);
}


export async function editBrands(id:string,formData:FormData) {
  await prisma.brand.update({
    where:{id},
    data:schema.parse({
      name:formData.get('name' || ""),
      description:formData.get('description' || "")
    })
  }); 
  revalidatePath(routes.brands.main);
  redirect(routes.brands.main)
}