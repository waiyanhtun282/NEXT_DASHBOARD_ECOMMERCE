import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-full h-screen grid place-items-center bg-gray-200">
      <div className=" text-center">
        <h1 className=" font-semibold text-3xl mb-5">Next Js Commerce</h1>
        <Link href={"/dashboard"}>
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </main>
  );
}
