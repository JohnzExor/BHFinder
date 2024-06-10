import { Suspense } from "react";
import Lists from "./components/Lists";
import Search from "./components/Search";
import { BrowseBHouseFallback } from "./components/ui/Fallbacks";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";

const page = () => {
  return (
    <div>
      <div className="  h-full w-full -z-10 fixed bg-gradient-to-t from-zinc-300 dark:from-transparent"></div>
      <Search />
      <BreadCrumb
        list={[
          { link: "/", name: "Home" },
          { link: "/browse", name: "Browse" },
        ]}
      />

      <Suspense fallback={<BrowseBHouseFallback />}>
        <Lists />
      </Suspense>
    </div>
  );
};

export default page;
