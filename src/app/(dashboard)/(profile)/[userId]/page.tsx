import { apiUrl } from "@/lib/storage";
import { unstable_noStore as noStore } from "next/cache";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

const getData = async (userId: string): Promise<ProfileDetails> => {
  noStore();
  const response = await fetch(`${apiUrl}/api/${userId}`);
  const { data } = await response.json();
  return data;
};

const page = async ({ params }: { params: Params }) => {
  const { userId } = params;
  const { user, bHouses } = await getData(userId);
  const { email } = user;
  return (
    <div>
      <div>{email}</div>
      <div>
        {bHouses.map(({ id, title }, index) => (
          <Link href={`/browse/${id}`} key={index}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
