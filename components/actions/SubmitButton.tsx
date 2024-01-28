"use client";
import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

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
      {pending ? "loading .." : name}
    </Button>
  );
}
