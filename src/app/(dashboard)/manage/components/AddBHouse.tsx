"use client";
import supabase, { apiUrl } from "@/lib/storage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { bHouseSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { ToastWithTitle } from "@/components/alert/Alert";
import { Textarea } from "@/components/ui/textarea";

const postBH = async (newBH: IBHouse, file: File) => {
  const { data, error } = await supabase.storage
    .from("bHousesPictures")
    .upload(`public/${uuidv4()}.jpg`, file, {
      cacheControl: "3600",
      upsert: true,
    });
  const response = await fetch(`${apiUrl}/api/manage/add/`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...newBH, imgUrl: data?.path }),
  });
  const dataFeedback = await response.json();
  return dataFeedback;
};

const AddBHouse = () => {
  const router = useRouter();

  const [file, setFile] = useState<File>();

  const form = useForm<z.infer<typeof bHouseSchema>>({
    resolver: zodResolver(bHouseSchema),
    defaultValues: {
      imgUrl: "",
      title: "",
      description: "",
      minPrice: "",
      maxPrice: "",
      location: "",
    },
  });

  const handleFileOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      setFile(file);
    }
  };

  const onSubmit = async (values: z.infer<typeof bHouseSchema>) => {
    const newValues = {
      ...values,
      userId: "",
      minPrice: parseFloat(values.minPrice),
      maxPrice: parseFloat(values.maxPrice),
    };

    if (!file) {
      return ToastWithTitle("No image attachment");
    }

    const res = await postBH(newValues, file);
    if (!res.ok) {
      return ToastWithTitle(res.message);
    }

    ToastWithTitle("Posted successfully");
    router.push(`/${res.data.userId}`);
    router.refresh();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" p-4 space-y-2">
        <h1 className="font-semibold text-3xl">Details</h1>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter the title of your boarding house"
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter a brief description"
                  {...field}
                  disabled={form.formState.isSubmitting}
                  className=" h-48"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="minPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minimum Price</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter the minimum price"
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
          name="maxPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Price</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter the maximum price"
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
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter the location"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" onChange={handleFileOnchange} />
        </div>
        <Button
          type="submit"
          className=" w-full font-semibold"
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
  );
};

export default AddBHouse;
