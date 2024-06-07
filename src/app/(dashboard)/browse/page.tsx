import { Suspense } from "react";
import Lists from "./components/Lists";
import Search from "./components/Search";

const page = () => {
  return (
    <div>
      <div className="  h-full w-full -z-10 fixed bg-gradient-to-t from-zinc-300"></div>
      <Search />
      <Suspense fallback={<>Loading</>}>
        <Lists />
      </Suspense>
    </div>
  );
};

export default page;
