import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import { link } from "fs";
import Link from "next/link";

const navigations = [
  {
    link: "/manage/add",
    name: "Add Boarding House",
  },
];

const page = () => {
  return (
    <div>
      <BreadCrumb
        list={[
          { link: "/", name: "Home" },
          { link: "/manage", name: "Manage" },
        ]}
      />
      <div className=" px-4">
        <h1 className=" font-bold text-3xl">Manage</h1>
        <div className=" border-2 rounded-2xl p-2 border-black">
          {navigations.map(({ link, name }, index) => (
            <Link href={link} key={index} className=" font-medium">
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
