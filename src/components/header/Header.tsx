"use client";

import Link from "next/link";

import { FaRegUserCircle } from "react-icons/fa";
import SidebarToggle from "../sidebar/SidebarToggle";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import SignOut from "@/app/auth/components/SignOut";
import { ModeToggle } from "../theme/theme-toggle";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import DesktopToggle from "@/app/auth/components/DesktopToggle";

const Header = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        "flex flex-col items-center w-full z-20 md:fixed md:bg-white md:dark:bg-zinc-950 md:border-b md:border-muted",
        {
          "text-white md:text-black dark:md:text-white":
            pathname.startsWith("/browse"),
        }
      )}
    >
      <div className="p-2 hidden md:flex justify-between items-center w-full max-w-[1600px]">
        <Link href={"/"} className=" font-medium text-2xl flex items-center">
          BH
          <span className=" text-lime-700 flex items-center gap-1">
            Finder
            <FaMagnifyingGlassLocation />
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <ModeToggle />
          {session?.user ? <SignOut /> : <DesktopToggle />}
        </div>
      </div>
      <div className="flex justify-between items-center w-full md:hidden">
        <SidebarToggle />
        {session?.user ? (
          <Link href={`/${session.user.id}`} className="p-7">
            <FaRegUserCircle size={20} />
          </Link>
        ) : (
          <Link href="/auth" className="p-7">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
