"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";
import { authSchema } from "@/lib/zodSchema";
import { ToastWithTitle } from "@/components/alert/Alert";

const LoginForm = ({ onClick }: { onClick?: () => void }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ email, password }: z.infer<typeof authSchema>) => {
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (!res?.ok) {
      return ToastWithTitle("Invalid password/email");
    }
    ToastWithTitle("Login success.");
    router.push("/browse");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" p-4 space-y-2">
        <h1 className="font-semibold text-3xl">Login</h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className=" w-full font-semibold"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <AiOutlineLoading className=" animate-spin" />
          ) : (
            "Login"
          )}
        </Button>
        <p className=" text-sm text-center flex items-center justify-center gap-1">
          Don&apos;t have an account?
          <span
            onClick={() => (onClick ? onClick() : null)}
            className="font-semibold hidden md:block cursor-pointer"
          >
            Signup Here
          </span>
          <Link href="/auth/signup" className=" font-semibold md:hidden">
            {" "}
            Signup Here
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
