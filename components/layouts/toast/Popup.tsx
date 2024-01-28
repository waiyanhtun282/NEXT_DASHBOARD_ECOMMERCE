"use client";
import { useToast } from "@/components/ui/use-toast";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect } from "react";

export default function Popup({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className: string;
}) {
  const { toast } = useToast();
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const delParam = useCallback(() => {
    const url = new URLSearchParams(params.toString());
    url.delete("status");
    router.push(`${pathname}?${url.toString()}`);
    console.log(url, "url");
  }, [router, pathname, params]);
  useEffect(() => {
    const status = params.get("status");
    if (status === "success") {
      toast({
        title,
        description,
        className,
      });
      delParam();
    }
  }, [params, toast, title, description, className, delParam]);
  return null;
}
