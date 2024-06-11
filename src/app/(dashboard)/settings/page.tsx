import BreadCrumb from "@/components/breadcrumb/BreadCrumb";

const page = () => {
  return (
    <div>
      <BreadCrumb
        list={[
          { link: "/", name: "Home" },
          { link: "/settings", name: "Settings" },
        ]}
      />
    </div>
  );
};

export default page;
