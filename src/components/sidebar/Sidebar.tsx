"use client";

import SignOut from "@/app/auth/components/SignOut";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "../ui/separator";
import { useSession } from "next-auth/react";
import Navigations from "./Navigations";
import { ModeToggle } from "../theme/theme-toggle";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-4 h-full w-full">
      <div className=" text-3xl md:hidden">BH FINDER</div>
      <div className="flex items-center gap-2 md:hidden">
        <ModeToggle />
        Theme
      </div>
      <div>
        <div className="text-muted-foreground text-sm mb-2">Your Profile</div>
        <div className=" bg-green-300 bg-opacity-35 rounded-xl p-3">
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
      <div className="mt-auto md:hidden">
        {session ? (
          <div className="flex items-center gap-2">
            <SignOut />
            Logout
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
