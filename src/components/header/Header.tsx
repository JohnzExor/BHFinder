"use client";

import Link from "next/link";

import { FaRegUserCircle } from "react-icons/fa";
import SidebarToggle from "../sidebar/SidebarToggle";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const Header = () => {
  const session = useSession();
  const pathname = usePathname();
  return (
    <div
      className={clsx("flex flex-col items-center w-full z-20", {
        "text-white": pathname.startsWith("/browse"),
      })}
    >
      <div className="flex justify-between items-center w-full">
        <SidebarToggle />
        {session ? (
          <Link href={`/${session.data?.user.id}`} className="p-7">
            <FaRegUserCircle size={20} />
          </Link>
        ) : (
          <Link href="/auth">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
