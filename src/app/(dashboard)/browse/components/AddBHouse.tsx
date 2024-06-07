"use client";
import supabase, { apiUrl } from "@/lib/storage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const postBH = async (newBH: IBHouse, file: File) => {
  const { data, error } = await supabase.storage
    .from("bHousesPictures")
    .upload(`public/${uuidv4()}.jpg`, file, {
      cacheControl: "3600",
      upsert: true,
    });
  const response = await fetch(`${apiUrl}/api/browse/`, {
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
  const [data, setData] = useState<IBHouse>({
    userId: "",
    imgUrl: "",
    title: "",
    description: "",
    minPrice: 0,
    maxPrice: 0,
    location: "",
  });

  const handleFileOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      setFile(file);
    }
  };
  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (file) {
      const res = await postBH(data, file);
      if (res.ok) {
        console.log(res);
        router.refresh();
      }
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h1>Add</h1>
      <input
        type="text"
        placeholder="Title"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Minimum Price"
        onChange={(e) =>
          setData({ ...data, minPrice: parseFloat(e.target.value) })
        }
      />
      <input
        type="number"
        placeholder="Maximum Price"
        onChange={(e) =>
          setData({ ...data, maxPrice: parseFloat(e.target.value) })
        }
      />
      <input
        type="text"
        placeholder="Location"
        value={data.location}
        onChange={(e) => setData({ ...data, location: e.target.value })}
      />
      <input
        type="file"
        placeholder="Upload your image"
        onChange={handleFileOnchange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddBHouse;
