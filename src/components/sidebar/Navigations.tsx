"use client";
import clsx from "clsx";

import Link from "next/link";
import { MdManageAccounts } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoIosBrowsers, IoIosSettings } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const navigations = [
  {
    name: "Browse",
    link: "/browse",
    icon: <IoIosBrowsers size={25} />,
    session: false,
  },
  {
    name: "Manage",
    link: "/manage",
    icon: <MdManageAccounts size={25} />,
    session: true,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <IoIosSettings size={25} />,
    session: false,
  },
];

const Navigations = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user ? true : false;
  return (
    <div>
      <div className="text-muted-foreground text-sm mb-2">Dashboard</div>
      <div className="flex flex-col gap-2 ">
        {navigations.map(({ name, link, icon, session }, index) => (
          <Link
            href={link}
            key={index}
            className={clsx("flex items-center gap-2 p-3 rounded-xl", {
              " bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-5":
                pathname === link ||
                (link !== "/" && pathname.startsWith(link)),
              " hidden": session !== user && !user,
            })}
          >
            {icon}
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigations;
