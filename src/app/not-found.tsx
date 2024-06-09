import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import React from "react";
import { MdDoNotDisturbAlt } from "react-icons/md";
const notFound = () => {
  return (
    <div className="h-full">
      <BreadCrumb
        list={[
          { link: "/", name: "Home" },
          { link: "/not-found", name: "Not found" },
        ]}
      />
      <div className="h-full flex flex-col -space-y-2 items-center justify-center">
        <h1 className=" text-7xl font-bold">404</h1>
        <p className=" text-muted-foreground flex items-center gap-1">
          Not found <MdDoNotDisturbAlt size={15} />
        </p>
      </div>
    </div>
  );
};

export default notFound;
