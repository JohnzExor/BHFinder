import { apiUrl } from "@/lib/storage";
import { unstable_noStore as noStore } from "next/cache";

const fetchData = async (): Promise<LandingStatistics> => {
  try {
    noStore();
    const response = await fetch(`${apiUrl}/api/`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const Statistics = async () => {
  const { data } = await fetchData();
  return (
    <div className=" grid grid-cols-2 gap-2 md:grid-cols-3">
      {data.map(({ name, count }, index) => (
        <div
          key={index}
          className=" border p-4 rounded-2xl shadow-md hover:border-b-4 hover:border-b-lime-900 duration-500 text-lime-900"
        >
          <h1 className=" text-muted-foreground">{name}</h1>
          <p className=" text-2xl font-medium">{count}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
