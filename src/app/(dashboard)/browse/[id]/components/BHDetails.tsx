import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import { apiUrl } from "@/lib/storage";
import Rooms from "./Rooms";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";

const imgLink =
  "https://mefpvvgnqqvpbqcxloyx.supabase.co/storage/v1/object/public/bHousesPictures/";

const getList = async (id: string): Promise<BHDetails> => {
  noStore();
  const response = await fetch(`${apiUrl}/api/browse/${id}`);
  const { data } = await response.json();
  return data;
};

const BHDetails = async ({ bHouseID }: { bHouseID: string }) => {
  const { bhouse, rooms, user } = await getList(bHouseID);

  const { username, id } = user;
  const { title, userId, location, description, imgUrl } = bhouse;
  return (
    <div>
      <div className="relative w-full h-[200px] -mt-24">
        <Image
          src={`${imgLink}${imgUrl}`}
          alt={imgUrl}
          fill
          className=" rounded-b-[40px] object-cover"
        />
        <div className=" w-full h-full bg-gradient-to-b from-neutral-950 z-10 absolute"></div>
      </div>

      <BreadCrumb
        list={[
          { link: "/", name: "Home" },
          { link: "/browse", name: "Browse" },
          { link: `/browse/${id}`, name: `${title}` },
        ]}
      />

      <div className="px-6 flex flex-col gap-4">
        <div className="flex gap-1">
          <IoLocationSharp />
          <p className=" text-muted-foreground text-sm">{location}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold">{title}</h1>
            <p className=" text-muted-foreground text-sm">
              Posted by:{" "}
              <Link href={`/${id}`} className=" underline">
                {username}
              </Link>
            </p>
          </div>
          <Avatar className=" h-[50px] w-[50px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <p className="p-2 text-sm">{description}</p>

        {/* <AddRoom listingId={bHouseID} userId={userId} /> */}
        <Rooms title={title} rooms={rooms} />
      </div>
    </div>
  );
};

export default BHDetails;
