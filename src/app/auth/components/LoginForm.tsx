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
import { formSchema } from "@/lib/zodSchema";
import { ToastWithTitle } from "@/components/alert/Alert";

const LoginForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ email, password }: z.infer<typeof formSchema>) => {
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (res?.ok) {
      ToastWithTitle("Login success.");
      router.push("/");
    }
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
        <p className=" text-sm text-center">
          Don&apos;t have an account?
          <Link href="/auth/signup" className=" font-semibold">
            {" "}
            Signup Here
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
