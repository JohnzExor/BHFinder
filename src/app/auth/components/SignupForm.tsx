"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const postUser = async (userInput: IUser) => {
  const response = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userInput),
  });
  console.log(await response.json());
};

const SignupForm = () => {
  const router = useRouter();
  const [data, setData] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await postUser(data);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={data.username}
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button type="submit">Create Account</button>
    </form>
  );
};
export default SignupForm;
