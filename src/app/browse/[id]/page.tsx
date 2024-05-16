import { unstable_noStore as noStore } from "next/cache";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const getList = async (id: string) => {
  noStore();
  const response = await fetch(`http://localhost:3000/api/browse/${id}`);
  const data = await response.json();
  return data.lists;
};

const page = async ({ params }: { params: Params }) => {
  const { id } = params;
  const data = await getList(id);
  console.log(data);
  return <div>page</div>;
};

export default page;
