import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function CreateButton({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <Button>{name}</Button>
    </Link>
  );
}
