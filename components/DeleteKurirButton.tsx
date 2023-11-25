"use client";

import { useTransition } from "react";
import { deleteMemberById } from "@/app/dashboard/kelolaakunkurir/action/actions";

export default function DeleteKurirButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const onSubmit = () => {
    startTransition(async () => {
      await deleteMemberById(id);
    });
  };

  return (
    <form action={onSubmit}>
      <button
        className="bg-red-700 text-white px-3 py-2 rounded-md text-sm"
      >
        Hapus
      </button>
    </form>
  );
}
