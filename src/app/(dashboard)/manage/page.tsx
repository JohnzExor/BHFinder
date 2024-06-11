import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import ManageList from "./components/ManageList";

const page = () => {
  return (
    <div>
      <BreadCrumb
        list={[
          { link: "/", name: "Home" },
          { link: "/manage", name: "Manage" },
        ]}
      />
      <ManageList />
    </div>
  );
};

export default page;
