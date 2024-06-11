import { IoKey, IoHeart } from "react-icons/io5";
import { RiPushpinFill } from "react-icons/ri";

const UserStatistics = ({ bHouses }: { bHouses: IBHouse[] }) => {
  const list = [
    {
      name: "Rents",
      count: 0,
      icon: <IoKey size={20} />,
    },
    {
      name: "Likes",
      count: 0,
      icon: <IoHeart size={20} />,
    },
    {
      name: "Posted",
      count: bHouses.length,
      icon: <RiPushpinFill size={20} />,
    },
  ];
  return (
    <div className=" p-4">
      <div className=" grid grid-cols-3 items-center gap-2">
        {list.map(({ name, count, icon }, index) => (
          <div className=" border rounded-2xl p-2" key={index}>
            <div></div>
            <div className="flex gap-1 items-center font-medium">
              {icon}
              {name}
            </div>
            <div className="text-center">{count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStatistics;
