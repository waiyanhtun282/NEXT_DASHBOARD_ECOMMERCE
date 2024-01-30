import BackButton from "@/components/actions/BackButton";
import SubmitButton from "@/components/actions/SubmitButton";
import { prisma } from "@/lib/prisma";
import { routes } from "@/routes/routes";
import { editBrands } from "@/server/brands/action";

export default async function BrandsEditPage({searchParams}:{
  searchParams:{id:string}
}) {
  const brand = await prisma.brand.findUnique({
    where:{id:searchParams.id}
  })
  // console.log(brand);

  return (
   <div className=" bg-white rounded-md p-3 shadow min-h-[80vh]">
      <div className=" md:px-5">
        <form action={editBrands.bind(null,searchParams.id)}
          className=" space-y-4"
        >
          <BackButton name="Brands" link={routes.brands.main} />
          <h2 className=" text-xl font-bold">Edit brand</h2>
          <div className="">
            <label htmlFor="name" className=" block mb-1 text-gray-500">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className=" p-3 rounded-md border focus:outline-none min-w-[400px]"
              placeholder="Category name"
              defaultValue={brand?.name || ""}
              autoComplete="off"
            />
          </div>
          <div className="">
            <label htmlFor="desc" className=" block mb-1 text-gray-500">
              Description
            </label>
            <textarea
              name="description"
              id="desc"
              className=" p-3 rounded-md border focus:outline-none min-w-[400px]"
              placeholder="Category description"
              defaultValue={brand?.description || ""}
              cols={30}
              rows={3}
            ></textarea>
          </div>
          <SubmitButton name="Update" className=" w-[100px]" />
        </form>
      </div>
    </div>
  );
}
