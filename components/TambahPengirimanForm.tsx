"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import Link from "next/link";
import { createPengiriman } from "@/app/dashboard/pengiriman/action/actions";

const FormSchema = z.object({
  status: z.enum(["Pick Up", "On the Way", "Delivered", "On Hold"]),
  idpaket: z.string(),
  idkurir: z.string(),
});

export default function TambahPengirimanForm({
  paket,
  kurir,
}: {
  paket: any[] | null;
  kurir: { id: any }[] | null;
}) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      status: "Pick Up",
      idpaket: "",
      idkurir: getRandomKurir(kurir),
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    startTransition(async () => {
        console.log(data);
        await createPengiriman(data);
    });
  }

  function getRandomKurir(data: { id: any }[] | null) {
    // Check if the data is not null and has at least one element
    if (data && data.length > 0) {
      // Generate a random index within the length of the array
      const randomIndex = Math.floor(Math.random() * data.length);

      // Return the randomly selected element
      return data[randomIndex].id;
    } else {
      // Return null if the array is empty or null
      return null;
    }
  }



  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="nama" className="mb-2 block text-sm font-medium">
            Pilih Paket
          </label>
          <div className="relative">
            <select
              {...form.register("idpaket")}
              id="idpaket"
              name="idpaket"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="idpaket-error"
            >
              <option value="" disabled>
                Pilih Paket
              </option>
              {paket?.map((paket, index) => (
                <option key={paket.id} value={paket.id}>
                  {index + 1}. {paket.jenisbunga} - {paket.alamat}
                </option>
              ))}
            </select>
            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/pengiriman"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <button
          className="flex h-10 items-center rounded-lg bg-orange-800 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 active:bg-orange-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          type="submit"
        >
          Tambah Pengiriman
          <AiOutlineLoading3Quarters
            className={cn("animate-spin", { hidden: !isPending })}
          />
        </button>
      </div>
    </form>
  );
}
