"use client";
import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export default function SubmitButton({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className={className}>
      {pending ? (
        <Loader2 size={20} className=" animate-spin" color="#ffffff" />
      ) : (
        name
      )}
    </Button>
  );
}
