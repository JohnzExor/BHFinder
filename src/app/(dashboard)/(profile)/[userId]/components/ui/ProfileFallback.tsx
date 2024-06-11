import { Skeleton } from "@/components/ui/skeleton";

const ProfileFallback = () => {
  return (
    <div className=" space-y-2">
      <Skeleton className=" w-[120px] h-[20px] m-4" />
      <div className="flex flex-col items-center gap-4 px-4">
        <Skeleton className=" w-52 h-52 rounded-full" />
        <div className=" flex flex-col items-center gap-1">
          <Skeleton className=" w-[200px] h-[30px]" />
          <Skeleton className=" w-[120px] h-[15px]" />
        </div>
        <Skeleton className=" w-full h-32" />
      </div>
    </div>
  );
};

export default ProfileFallback;
