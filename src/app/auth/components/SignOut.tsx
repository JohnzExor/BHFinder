"use client";

import { postUserSignOut } from "@/services/User.service";

const SignOut = () => {
  return <button onClick={() => postUserSignOut()}>Logout</button>;
};

export default SignOut;
