import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import DesktopSidebar from "@/components/sidebar/DesktopSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <DesktopSidebar>{children}</DesktopSidebar>
      <Footer />
    </div>
  );
};

export default Layout;
