"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddRoom from "./AddRoom";
import { FaRegPlusSquare } from "react-icons/fa";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

const AddRoomToggle = ({
  listingId,
  userId,
}: {
  listingId: string;
  userId: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const handleDialog = () => {
    setIsOpen(false);
  };

  const isAuthor = userId === session?.user.id;

  return (
    <React.Fragment>
      {isAuthor ? (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant={"ghost"}>
              <FaRegPlusSquare size={20} />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add Room</DialogTitle>
              <DialogDescription>
                Anyone will be able to see this room
              </DialogDescription>
            </DialogHeader>
            <AddRoom listingId={listingId} whenDone={handleDialog} />
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="-mt-2">
                Close
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      ) : null}
    </React.Fragment>
  );
};

export default AddRoomToggle;
