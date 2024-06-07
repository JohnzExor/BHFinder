import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

import { HiOutlineBars2 } from "react-icons/hi2";

const SidebarToggle = () => {
  return (
    <Sheet>
      <SheetTrigger className="p-7">
        <HiOutlineBars2 size={30} />
      </SheetTrigger>
      <SheetContent>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default SidebarToggle;
