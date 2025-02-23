import React from "react";
import Feed from "../components/home/Feed";
import Filter from "../components/home/Filter";
import Saved from "../components/home/Saved";

const Homepage: React.FC = () => {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        {/* Sidebar Filter (Hidden on small screens) */}
        <div className="col-md-3 d-none d-md-block">
          <Filter />
        </div>

        {/* Main Feed (Takes up most of the space) */}
        <div className="col-md-6">
          <Feed />
        </div>

        {/* Saved Items (Hidden on small screens) */}
        <div className="col-md-3 d-none d-md-block">
          <Saved />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
