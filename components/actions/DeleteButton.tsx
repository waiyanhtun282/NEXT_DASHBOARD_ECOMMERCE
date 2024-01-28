"use client";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import SubmitButton from "./SubmitButton";

export default function DeleteButton({ action }: { action: any }) {
  const [showBox, setShowBox] = useState(false);
  return (
    <section>
      <button onClick={() => setShowBox(true)} className=" block">
        <Trash2 size={20} color="#ec2222" />
      </button>
      {showBox && (
        <div className=" fixed top-0 left-0 bottom-0 right-0 bg-[#333333a8] grid place-items-center">
          <div className="p-5 bg-gray-50 rounded-md">
            <h3 className=" text-center mb-5">Are you sure to delete ?</h3>
            <div className=" flex items-center justify-between gap-5">
              <form action={action}>
                <SubmitButton
                  name="Delete"
                  className=" w-[100px] bg-red-500 hover:bg-red-600"
                />
              </form>
              <Button
                type="button"
                className=" w-[100px]"
                onClick={() => setShowBox(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
