import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Suspense } from "react";
import BHDetails from "./components/BHDetails";
import { BHDetailsFallback } from "./components/ui/Fallbacks";

const page = async ({ params }: { params: Params }) => {
  const { id } = params;
  return (
    <div>
      <Suspense fallback={<BHDetailsFallback />}>
        <BHDetails bHouseID={id} />
      </Suspense>
    </div>
  );
};

export default page;
