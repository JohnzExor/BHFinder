import Link from "next/link";
import { BsHouseAddFill } from "react-icons/bs";
import { HiMiniWrench } from "react-icons/hi2";

const navigations = [
  {
    link: "/manage/add",
    name: "Add",
    icon: <BsHouseAddFill size={20} />,
  },
  {
    link: "/manage/houses",
    name: "Manage",
    icon: <HiMiniWrench size={20} />,
  },
];
const ManageList = () => {
  return (
    <div className=" px-4 space-y-4">
      <h1 className=" font-bold text-3xl">Management</h1>
      <div className=" grid grid-cols-2 gap-2">
        {navigations.map(({ link, name, icon }, index) => (
          <Link
            href={link}
            key={index}
            className=" font-medium flex items-center gap-2 border p-4 rounded-2xl"
          >
            {icon}
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ManageList;
