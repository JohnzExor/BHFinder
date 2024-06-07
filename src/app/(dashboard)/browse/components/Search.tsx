"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const session = useSession();
  return (
    <div className="relative flex flex-col items-center justify-end gap-4 text-white p-4 h-[250px] -mt-24 rounded-b-[40px] bg-cover bg-[url('/landing.jpg')]">
      <div className="absolute inset-0 bg-black opacity-50 rounded-b-[40px]"></div>
      <div className="relative z-10 flex flex-col gap-4">
        <h1 className="text-2xl">
          Hey, {session.data?.user ? `${session.data?.user.username}!` : null}{" "}
          Tell us where you want to stay
        </h1>

        <Link
          href={"/search"}
          className="flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm text-white bg-white bg-opacity-20 w-full"
        >
          <IoSearchOutline size={20} />
          <div className="-space-y-1 flex flex-col text-sm">
            <p>Search places</p>
            <span className="text-xs">Boarding Houses • Rooms</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Search;
