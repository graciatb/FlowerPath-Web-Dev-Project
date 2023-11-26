"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { updateKurirById } from "@/app/dashboard/kelolaakunkurir/action/actions";
import Link from "next/link";

const FormSchema = z
  .object({
    nama: z.string().min(3, {
      message: "Username must be at least 2 characters.",
    }),
    role: z.enum(["kurir", "admin"]),
    email: z.string().email(),
    password: z.string().optional(),
    confirm: z.string().optional(),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Passoword doesn't match",
    path: ["confirm"],
  });

export default function EditKurirForm({ kurir }: { kurir: any }) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nama: kurir.nama,
      role: "kurir",
      email: kurir.email,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
        console.log(data);
        await updateKurirById(kurir.id, data);
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Nama Kurir */}
        <div className="mb-4">
          <label htmlFor="nama" className="mb-2 block text-sm font-medium">
            Nama Kurir
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                {...form.register("nama")}
                id="nama"
                name="nama"
                type="text"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={kurir.nama}
                placeholder="Masukkan nama kurir"
              />
            </div>
          </div>
        </div>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                {...form.register("email")}
                id="email"
                name="email"
                type="email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={kurir.email}
                placeholder="Masukkan Email"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                {...form.register("password")}
                id="password"
                name="password"
                type="password"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={kurir.password}
                placeholder="Masukkan password"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="confirm" className="mb-2 block text-sm font-medium">
            Konfirmasi Password
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                {...form.register("confirm")}
                id="confirm"
                name="confirm"
                type="password"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue={kurir.confirm}
                placeholder="Konfirmasi password"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/kelolaakunkurir"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <button
          className="flex h-10 items-center rounded-lg bg-orange-800 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 active:bg-orange-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          type="submit"
        >
          Edit Akun
          <AiOutlineLoading3Quarters
            className={cn("animate-spin", { hidden: !isPending })}
          />
        </button>
      </div>
    </form>
  );
}
