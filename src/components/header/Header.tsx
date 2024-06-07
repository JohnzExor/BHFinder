"use client";

import Link from "next/link";

import { FaRegUserCircle } from "react-icons/fa";
import SidebarToggle from "../sidebar/SidebarToggle";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const Header = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <div
      className={clsx("flex flex-col items-center w-full z-20", {
        "text-white": pathname.startsWith("/browse"),
      })}
    >
      <div className="flex justify-between items-center w-full">
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
