import { apiUrl } from "@/lib/storage";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { notFound } from "next/navigation";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";

const getData = async (userId: string): Promise<ProfileDetails> => {
  noStore();
  const response = await fetch(`${apiUrl}/api/${userId}`);
  const { data } = await response.json();
  return data;
};

const Profile = async ({ userId }: { userId: string }) => {
  const { user, bHouses } = await getData(userId);

  if (!user) {
    notFound();
  }

  const { email, username, id } = user;
  return (
    <div>
      <BreadCrumb
        list={[
          { link: "/", name: "Home" },
          { link: `${id}`, name: `${username}` },
        ]}
      />
      <div className=" px-4 flex flex-col items-center gap-4">
        <Avatar className=" w-52 h-52">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className=" text-center -space-y-1">
          <h1 className=" font-semibold text-3xl">{username}</h1>
          <p className=" text-sm text-muted-foreground">{email}</p>
        </div>
        <div>
          {bHouses.map(({ id, title }, index) => (
            <Link href={`/browse/${id}`} key={index}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
