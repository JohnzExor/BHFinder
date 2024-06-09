"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ToastWithTitle } from "@/components/alert/Alert";
import { AiOutlineNumber } from "react-icons/ai";
import { IoIosPricetags } from "react-icons/io";
import { Button } from "@/components/ui/button";

const Rooms = ({
  title,
  rooms,
}: {
  title: string | undefined;
  rooms: IRoom[];
}) => {
  return (
    <div className=" space-y-2">
      <div className=" font-semibold">Available Rooms</div>
      <div className="flex flex-col gap-2">
        {rooms.map(({ roomNumber, price, isAvailable }, index) => (
          <Drawer key={index}>
            <DrawerTrigger
              disabled={!isAvailable}
              className="flex items-center text-sm justify-between shadow-md py-3 px-4 rounded-xl"
            >
              <div className="flex items-center gap-1">
                <AiOutlineNumber size={20} />
                {roomNumber}
              </div>
              <div className=" text-muted-foreground">
                {isAvailable ? "Available" : "Not available"}
              </div>
              <div className="flex items-center gap-1">
                <IoIosPricetags size={20} />
                {price}
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <div>
                <div className="flex flex-col items-center">
                  <div className=" text-center">
                    <h1 className=" font-semibold text-xl">Rent</h1>
                    <p className=" text-muted-foreground text-sm">{title}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <AiOutlineNumber size={20} />
                      {roomNumber}
                    </div>
                    <div className=" text-2xl">•</div>
                    <div className="flex items-center gap-1">
                      <IoIosPricetags size={20} />
                      {price}
                    </div>
                  </div>
                </div>
              </div>
              <DrawerFooter className="flex flex-col gap-2">
                <Button onClick={() => ToastWithTitle("Not yet Working")}>
                  Book
                </Button>
                <DrawerClose asChild>
                  <Button variant={"secondary"}>Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
