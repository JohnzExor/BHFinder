"use client";

import supabase from "@/lib/storage";
import React, { useState } from "react";

const upload = async (file: File) => {
  const { data, error } = await supabase.storage
    .from("bHousesPictures")
    .upload("public/pic1.jpg", file, { cacheControl: "3600", upsert: true });
  console.log(data, error);
};

const ImageUploader = () => {
  const [file, setFile] = useState<File>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      setFile(file);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      await upload(file);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="file" placeholder="Upload your image" onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ImageUploader;
