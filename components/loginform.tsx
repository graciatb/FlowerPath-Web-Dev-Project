"use client";
import * as z from "zod";
import { signIn } from "@/app/login/action/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { AuthTokenResponse } from "@supabase/supabase-js";

const FormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {
        message: "Password tidak boleh kosong"
    }),
});

export default function LoginForm() {
    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        startTransition(async () => {
            const { error } = JSON.parse(
				await signIn(data)
			) as AuthTokenResponse;
            if (error) {
                alert(error.message);
            } else {

            }
        })
    }
    return (
        <form 
            className="w-full"
            onSubmit={form.handleSubmit(onSubmit)}
        >
            <label htmlFor="email">
                Email
            </label>
            <input
                {...form.register("email")}
                type="email"
                id="email"
                name="email"
                className="w-full border border-solid border-orange-700 rounded p-2 mb-2"
                placeholder="Masukkan email Anda"
            />

            <label htmlFor="password">
                Password
            </label>
            <input
                {...form.register("password")}
                type="password"
                id="password"
                name="password"
                className="w-full border border-solid border-orange-700 rounded p-2 mb-4"
                placeholder="Masukkan password Anda"
                minLength={6}
            />

            {/* Tombol untuk login */}
            
            <button
                type="submit"
                className="bg-orange-700 text-white rounded-full py-2 px-6 cursor-pointer w-full"
            >
                Login
                <AiOutlineLoading3Quarters className={cn("animate-spin",{hidden: true,})} />
            </button>
            
        </form>
    );
}