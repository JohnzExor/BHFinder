import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import React from "react";

const getLists = async () => {
  noStore();
  const response = await fetch("http://localhost:3000/api/browse");
  const data = await response.json();
  return data.lists;
};

const Lists = async () => {
  const data: IBHouse[] = await getLists();
  return (
    <div>
      {data.map(({ _id, title }, index) => (
        <Link href={`/browse/${_id}`} key={index}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Lists;
