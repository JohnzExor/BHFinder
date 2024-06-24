import Link from "next/link";
import React from "react";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { IoIosBrowsers } from "react-icons/io";

const LandingText = () => {
  return (
    <div className=" flex flex-col gap-4">
      <h1 className=" text-4xl font-semibold md:text-8xl">
        Convenient, Affordable, and Secure
      </h1>
      <div className=" space-y-2">
        <h1 className=" text-2xl flex gap-1 items-center text-lime-900">
          <FaMagnifyingGlassLocation />
          Boarding House Finder
        </h1>
        <p className=" text-muted-foreground text-sm">
          Discover a wide selection of boarding houses available for booking
          today. Explore various options and secure your accommodations in these
          cozy residences for your upcoming stay.
        </p>
        <Link
          href="/browse"
          className=" flex gap-1 items-center justify-center text-lime-900 border border-lime-900 shadow-md p-2 rounded-md md:w-40 cursor-pointer hover:bg-lime-900 hover:text-white duration-500 hover:border-transparent"
        >
          <IoIosBrowsers size={20} />
          Browse
        </Link>
      </div>
    </div>
  );
};

export default LandingText;
