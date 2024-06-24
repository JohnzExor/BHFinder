"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import { useState } from "react";
import SignupForm from "./SignupForm";

const DesktopToggle = () => {
  const [page, setPage] = useState(1);
  const handleOnClick = () => {
    console.log(page);
    if (page === 1) {
      return setPage(2);
    }
    return setPage(1);
  };
  return (
    <Dialog>
      <DialogTrigger>Login</DialogTrigger>
      <DialogContent>
        {page === 1 ? (
          <LoginForm onClick={handleOnClick} />
        ) : (
          <SignupForm onClick={handleOnClick} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DesktopToggle;
