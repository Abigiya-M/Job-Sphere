import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
// import FooterComponent from "../components/commonComponents/FooterComponent";
import Searchbar from "../components/home/Searchbar";
import React from "react";

function Layout() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] mx-auto flex flex-col">
        {/* Header Section */}
        <section className="w-full h-[6vh] mb-5">
          <Header />
        </section>

        {/* Search Section */}
        <section className="w-full">
          <Searchbar />
        </section>

        {/* Main Content Section */}
        <section className="w-full flex-1 overflow-y-auto">
          <Outlet />
          {/* <FooterComponent /> */}
        </section>
      </div>
    </div>
  );
}

export default Layout;
