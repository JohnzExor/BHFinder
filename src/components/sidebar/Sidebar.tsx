"use client";

import SignOut from "@/app/auth/components/SignOut";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiLogout } from "react-icons/ci";
import { Separator } from "../ui/separator";
import { useSession } from "next-auth/react";
import Navigations from "./Navigations";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className=" text-3xl">BH FINDER</div>
      <div>
        <div className="text-muted-foreground text-sm mb-2">Your Profile</div>
        <div className=" bg-black bg-opacity-5 rounded-xl p-3">
          {session ? (
            <Link href={`/${session.user.id}`}>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className=" -space-y-1">
                  <div>{session.user.username}</div>
                  <div className=" text-muted-foreground text-sm">
                    {session.user?.email}
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div>
              <Link href="/auth">Login</Link>
            </div>
          )}
        </div>
      </div>
      <Separator />
      <Navigations />
      <div className="mt-auto">
        {session ? (
          <div className="flex items-center gap-2">
            <CiLogout size={25} />
            <SignOut />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
