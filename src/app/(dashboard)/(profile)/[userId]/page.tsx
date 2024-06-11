import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Profile from "./components/Profile";
import { Suspense } from "react";
import ProfileFallback from "./components/ui/ProfileFallback";

const page = async ({ params }: { params: Params }) => {
  const { userId } = params;
  return (
    <div>
      <Suspense fallback={<ProfileFallback />}>
        <Profile userId={userId} />
      </Suspense>
    </div>
  );
};

export default page;
