"use client";
import clsx from "clsx";

import Link from "next/link";
import { MdManageAccounts } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoIosBrowsers, IoIosSettings } from "react-icons/io";
import { usePathname } from "next/navigation";

const navigations = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome size={25} />,
  },
  {
    name: "Browse",
    link: "/browse",
    icon: <IoIosBrowsers size={25} />,
  },
  {
    name: "Manage",
    link: "/manage",
    icon: <MdManageAccounts size={25} />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <IoIosSettings size={25} />,
  },
];

const Navigations = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="text-muted-foreground text-sm mb-2">Dashboard</div>
      <div className="flex flex-col gap-2 ">
        {navigations.map(({ name, link, icon }, index) => (
          <Link
            href={link}
            key={index}
            className={clsx("flex items-center gap-2 p-3 rounded-xl", {
              " bg-black dark:bg-white bg-opacity-5 dark:bg-opacity-5":
                pathname === link ||
                (link !== "/" && pathname.startsWith(link)),
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
