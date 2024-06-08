import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Profile from "./components/Profile";

const page = async ({ params }: { params: Params }) => {
  const { userId } = params;
  return (
    <div>
      <Profile userId={userId} />
    </div>
  );
};

export default page;
