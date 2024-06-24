import Footer from "@/components/Footer";
import LandingText from "@/components/landingpage/LandingText";
import Statistics from "@/components/landingpage/Statistics";
import { ModeToggle } from "@/components/theme/theme-toggle";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = async () => {
  return (
    <div className="flex flex-col w-full px-4 pt-4 h-screen md:items-center md:px-20 md:pt-20">
      <div className=" ml-auto">
        <ModeToggle />
      </div>
      <div className=" space-y-4 p-3 w-full max-w-[1000px]">
        <LandingText />
        <Separator />
        <Statistics />
      </div>
      <Footer />
    </div>
  );
};

export default page;
