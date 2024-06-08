import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { apiUrl } from "@/lib/storage";

const imgLink =
  "https://mefpvvgnqqvpbqcxloyx.supabase.co/storage/v1/object/public/bHousesPictures/";

const getLists = async (): Promise<IBHouse[]> => {
  noStore();
  const response = await fetch(`${apiUrl}/api/browse`);
  const { data } = await response.json();
  return data;
};

const Lists = async () => {
  const data = await getLists();

  return (
    <div className="flex flex-col gap-2 py-4">
      <h1 className=" font-semibold px-4">The most relevant</h1>
      <div className="w-full overflow-x-auto scroll-smooth pb-2">
        <div className="flex space-x-4 px-4">
          {data.map(
            ({ id, imgUrl, title, location, minPrice, maxPrice }, index) => (
              <Link
                href={`/browse/${id}`}
                key={index}
                className="bg-white rounded-3xl shadow-sm w-full max-w-[300px] flex-shrink-0 dark:bg-zinc-900"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={`${imgLink}${imgUrl}`}
                    alt={imgUrl}
                    layout="fill"
                    className="rounded-3xl object-cover"
                  />
                </div>

                <div className="p-4">
                  <h1 className="text-sm font-bold">{title}</h1>
                  <p className="text-muted-foreground text-xs">{location}</p>
                  <p className="text-muted-foreground text-xs">
                    {minPrice} - {maxPrice}
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
