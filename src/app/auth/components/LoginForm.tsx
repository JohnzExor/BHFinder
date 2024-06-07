"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.ok) {
      router.push("/");
      router.refresh();
    }

    if (res?.error) {
      alert(res.error);
    }
  };
  return (
    <form onSubmit={onSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
