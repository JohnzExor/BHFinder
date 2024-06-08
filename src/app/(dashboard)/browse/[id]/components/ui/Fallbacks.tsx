import { Skeleton } from "@/components/ui/skeleton";

export const BHDetailsFallback = () => (
  <div>
    <Skeleton className="rounded-b-[40px] w-full h-[200px] -mt-24" />
    <div className=" w-full p-6 flex flex-col gap-4">
      <Skeleton className=" w-full h-[20px]" />
      <div className="flex items-center gap-2">
        <div className=" space-y-2 w-full">
          <Skeleton className=" w-full h-[20px]" />
          <Skeleton className=" w-20 h-[15px]" />
        </div>
        <Skeleton className=" rounded-full h-14 w-16" />
      </div>
      <Skeleton className=" w-full h-[250px]" />
    </div>
  </div>
);
