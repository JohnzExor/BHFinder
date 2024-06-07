import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosBrowsers } from "react-icons/io";

const page = async () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className=" text-7xl">Boarding House Finder</h1>
      <p className="text-sm text-muted-foreground p-2">
        Discover a wide selection of boarding houses available for booking
        today. Explore various options and secure your accommodations in these
        cozy residences for your upcoming stay.
      </p>
      <Link
        href="/browse"
        className=" bg-muted-foreground py-2 w-full rounded-3xl flex items-center justify-center gap-2 text-white"
      >
        <IoIosBrowsers size={20} />
        Browse
      </Link>
      <div className="mt-4">
        <Image
          src="/landing.jpg"
          height={1000}
          width={1000}
          alt="s"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default page;
