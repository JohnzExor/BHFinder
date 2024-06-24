import React from "react";
import Sidebar from "./Sidebar";

const DesktopSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:block w-full min-w-[300px] max-w-[300px] p-6 fixed mt-16">
        <Sidebar />
      </div>
      <div className="flex-grow ml-0 md:ml-[300px] scroll-smooth md:mt-16">
        {children}
      </div>
    </div>
  );
};

export default DesktopSidebar;
