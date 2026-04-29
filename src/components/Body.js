import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import { useState } from "react";

const filterTopRated = () => {
  return restaurants.filter((res) => res.info.avgRating > 4);
};

const Body = () => {
  const resData = restaurants.map((r) => (
    <RestaurantCard resData={r.info} key={r.info.id} />
  ));
  return (
    <div className="body">
      <div className="filters">
        <button className="filter-btn" onClick={filterTopRated}>
          Top rated restaurants
        </button>
      </div>
      {/* <div className="search-bar">Search</div> */}
      <div className="rest-container">{resData}</div>
    </div>
  );
};

export default Body;
