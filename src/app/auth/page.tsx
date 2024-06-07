import React from "react";
import LoginForm from "./components/LoginForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/");
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default page;
