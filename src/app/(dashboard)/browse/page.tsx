import { Suspense } from "react";
import Lists from "./components/Lists";
import Search from "./components/Search";
import AddBHouse from "./components/AddBHouse";

const page = () => {
  return (
    <div>
      <div className="  h-full w-full -z-10 fixed bg-gradient-to-t from-zinc-300 dark:from-transparent"></div>
      <Search />
      <Suspense fallback={<>Loading</>}>
        <Lists />
      </Suspense>
    </div>
  );
};

export default page;
