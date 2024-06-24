"use client";

import { apiUrl } from "@/lib/storage";
import { authSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ToastWithTitle } from "@/components/alert/Alert";

const postUser = async (userInput: IUser) => {
  const response = await fetch(`${apiUrl}/api/auth/signup`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userInput),
  });
  const data = await response.json();
  return data;
};

const SignupForm = ({ onClick }: { onClick?: () => void }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof authSchema>) => {
    if (values.password !== values.confirm_password) {
      return ToastWithTitle("Password dont match");
    }
    const res = await postUser(values);
    console.log(res);

    if (!res?.ok) {
      return ToastWithTitle(res.message);
    }

    ToastWithTitle("Account created.");
    const signin = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signin?.ok) {
      ToastWithTitle("Login success.");
      router.push("/browse");
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" p-4 space-y-2">
        <h1 className="font-semibold text-3xl">Sign up</h1>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm your password"
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
            "Register"
          )}
        </Button>
        <p className=" text-sm text-center flex items-center justify-center gap-1">
          Already have an account?
          <span
            onClick={() => (onClick ? onClick() : null)}
            className="font-semibold hidden md:block cursor-pointer"
          >
            Login here
          </span>
          <Link href="/auth" className=" font-semibold md:hidden">
            {" "}
            Login here
          </Link>
        </p>
      </form>
    </Form>
  );
};
export default SignupForm;
