import { Skeleton } from "@/components/ui/skeleton";

export const BrowseBHouseFallback = () => (
  <div className=" p-4 flex flex-col gap-4">
    <Skeleton className=" w-[150px] h-[20px]" />
    <div className="flex flex-col gap-2 shrink-0">
      <Skeleton className="w-full max-w-[300px] h-52" />
      <Skeleton className="w-full max-w-[150px] h-[15px]" />
      <Skeleton className="w-full max-w-[50px] h-[15px]" />
    </div>
  </div>
);
