"use client";
import { apiUrl } from "@/lib/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { roomSchema } from "@/lib/zodSchema";
import { ToastWithTitle } from "@/components/alert/Alert";
import { AiOutlineLoading } from "react-icons/ai";

const postRoom = async (newRoom: IRoom, id: string) => {
  const response = await fetch(`${apiUrl}/api/browse/${id}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newRoom),
  });
  const data = await response.json();
  return data;
};

const AddRoom = ({
  listingId,
  userId,
  whenDone,
}: {
  listingId: string;
  userId: string;
  whenDone: () => void;
}) => {
  const router = useRouter();
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof roomSchema>>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      listingId: listingId,
      roomNumber: "",
      price: "",
      isAvailable: true,
    },
  });

  const onSubmit = async (values: z.infer<typeof roomSchema>) => {
    const newValue = { ...values, price: parseFloat(values.price) };
    const res = await postRoom(newValue, listingId);

    if (!res.ok) {
      return ToastWithTitle(res.message);
    }

    ToastWithTitle(res.message);
    whenDone();
    form.reset();
    router.refresh();
  };

  return (
    <React.Fragment>
      {session?.user ? (
        session.user.id === userId ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="roomNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Room Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the room number"
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
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the price"
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
                className=" w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <AiOutlineLoading className=" animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        ) : null
      ) : null}
    </React.Fragment>
  );
};

export default AddRoom;
