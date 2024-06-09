import { Suspense } from "react";
import Lists from "./components/Lists";
import Search from "./components/Search";
import AddBHouse from "./components/AddBHouse";
import { BrowseBHouseFallback } from "./components/ui/Fallbacks";

const page = () => {
  return (
    <div>
      <div className="  h-full w-full -z-10 fixed bg-gradient-to-t from-zinc-300 dark:from-transparent"></div>
      <Search />
      <Suspense fallback={<BrowseBHouseFallback />}>
        <Lists />
      </Suspense>
    </div>
  );
};

export default page;
