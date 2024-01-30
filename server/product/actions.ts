'use server';

import  zod  from 'zod';
import { prisma } from "@/lib/prisma";
import { revalidatePath } from 'next/cache';
import { routes } from '@/routes/routes';
import { redirect } from 'next/navigation';
const schema = zod.object({
  name: zod.string(),
  price:zod.string(),
  description: zod.string(),
  //   image: zod.string(),
});
export async function createProdcuts(formData:FormData){
   await prisma.product.create({
   data: schema.parse({
      name: formData.get("name" || ""),
      price: formData.get("price" || ""),
      description: formData.get("description" || ""),
    }),
  });
  revalidatePath(routes.products.main);
  redirect(`${routes.products.main}?status=success`);
}




