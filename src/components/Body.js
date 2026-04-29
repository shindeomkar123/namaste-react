import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";

const Body = () => {
  const resData = restaurants.map((r) => (
    <RestaurantCard resData={r.info} key={r.info.id} />
  ));
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="rest-container">{resData}</div>
    </div>
  );
};

export default Body;
