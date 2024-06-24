import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { apiUrl } from "@/lib/storage";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";

const imgLink =
  "https://mefpvvgnqqvpbqcxloyx.supabase.co/storage/v1/object/public/bHousesPictures/";

const getLists = async (): Promise<IBHouse[]> => {
  try {
    noStore();
    const response = await fetch(`${apiUrl}/api/browse`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const Lists = async () => {
  const data = await getLists();
  const reversedList = [...data].reverse();

  return (
    <div className="flex flex-col gap-2">
      <h1 className=" font-semibold px-4">The most relevant</h1>
      <div className="w-full overflow-x-auto scroll-smooth pb-2">
        <div className="flex space-x-4 px-4 md:grid md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] md:space-x-0 md:px-0 md:gap-5">
          {reversedList.map(
            ({ id, imgUrl, title, location, minPrice, maxPrice }, index) => (
              <Link
                href={`/browse/${id}`}
                key={index}
                className="border rounded-3xl shadow-md bg-black bg-opacity-5 dark:bg-opacity-100 w-full max-w-[300px] flex-shrink-0 dark:bg-zinc-900"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={`${imgLink}${imgUrl}`}
                    alt={imgUrl}
                    fill
                    className="rounded-3xl object-cover"
                  />
                </div>

                <div className="p-4">
                  <h1 className="text-sm font-bold">{title}</h1>
                  <p className="flex gap-1 items-center text-muted-foreground">
                    <IoLocationSharp />
                    <span className="  text-xs">{location}</span>
                  </p>
                  <p className="flex gap-1 items-center text-muted-foreground text-xs">
                    <IoIosPricetags size={15} />
                    <span>
                      {minPrice} - {maxPrice}
                    </span>
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Lists;
