import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;
  return (
    <div className="rest-card">
      <img className="rest-img" src={`${CDN_URL}${cloudinaryImageId}`} />
      <h3>{name}</h3>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h5>{sla.deliveryTime}</h5>
    </div>
  );
};
export default RestaurantCard;
