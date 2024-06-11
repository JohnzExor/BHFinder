"use client";

import moment from "moment";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaRegPlusSquare } from "react-icons/fa";

const BHList = ({
  bHouses,
  profileId,
}: {
  bHouses: IBHouse[];
  profileId: string;
}) => {
  const { data: session } = useSession();
  return (
    <div className="px-6">
      <div className="flex items-center justify-between mx-4">
        <h1 className="font-semibold">Posted Boarding Houses</h1>
        {session?.user.id === profileId ? (
          <Link href="/manage/add">
            <FaRegPlusSquare size={20} />
          </Link>
        ) : null}
      </div>
      <div className="grid grid-cols-2 gap-2 py-2">
        {bHouses.length > 0 ? (
          bHouses
            .reverse()
            .map(({ id, title, createdAt, updatedAt }, index) => (
              <Link
                href={`/browse/${id}`}
                key={index}
                className="border p-4 rounded-2xl shadow-md"
              >
                <h1 className="font-medium">{title}</h1>
                <div className=" text-muted-foreground text-sm">
                  {createdAt === updatedAt ? (
                    <p>
                      Created:{" "}
                      <span>{moment(createdAt).startOf("hour").fromNow()}</span>
                    </p>
                  ) : (
                    <div>
                      <p>
                        Created:{" "}
                        <span>
                          {moment(createdAt).startOf("hour").fromNow()}
                        </span>
                      </p>
                      <p>
                        Updated:{" "}
                        <span>
                          {moment(updatedAt).startOf("hour").fromNow()}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            ))
        ) : (
          <div className="text-center text-muted-foreground text-sm">
            No boarding houses
          </div>
        )}
      </div>
    </div>
  );
};

export default BHList;
