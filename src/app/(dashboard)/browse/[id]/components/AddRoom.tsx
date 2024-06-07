"use client";
import { apiUrl } from "@/lib/storage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const postRoom = async (newRoom: IRoom, id: string) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newRoom),
  });
  const data = await response.json();
  return data;
};

const AddRoom = ({
  listingId,
  userId,
}: {
  listingId: string;
  userId: string;
}) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [data, setData] = useState({
    listingId: listingId,
    roomNumber: "",
    price: 0,
    isAvailable: true,
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await postRoom(data, listingId);
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div>
      {session?.user ? (
        session.user.id === userId ? (
          <form onSubmit={onSubmit}>
            AddRoom{" "}
            <div>
              <input
                type="text"
                placeholder="Room Number"
                onChange={(e) =>
                  setData({ ...data, roomNumber: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="price"
                onChange={(e) =>
                  setData({ ...data, price: parseFloat(e.target.value) })
                }
              />
            </div>
            <button type="submit">Post</button>
          </form>
        ) : null
      ) : null}
    </div>
  );
};

export default AddRoom;
