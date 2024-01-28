import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BackButton({
  link,
  name,
}: {
  link: string;
  name: string;
}) {
  return (
    <Link href={link} className=" flex items-center gap-3">
      <ArrowLeft size={20} />
      {name}
    </Link>
  );
}
