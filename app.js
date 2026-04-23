import React from "react";
import { createRoot } from "react-dom/client";
import logo from "./assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resName, cuisine }) => (
  <div className="rest-card">
    <img
      className="rest-img"
      src="https://b.zmtcdn.com/data/pictures/3/22215123/abba4f608cf63924ce467db5050ce307_o2_featured_v2.jpg?output-format=webp"
    />
    <h3>{resName}</h3>
    <h4>{cuisine}</h4>
    <h4>4 starts</h4>
    <h5>38 min</h5>
  </div>
);

const Body = () => (
  <div className="body">
    <div className="search-bar">Search</div>
    <div className="rest-container">
      <RestaurantCard
        resName="Omkar fooods"
        cuisine="Biryani, Dahi wada, Gulab Jamun"
      />
      <RestaurantCard resName="Kshitija fooods" cuisine="healthy food items" />
    </div>
  </div>
);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);

console.log(logo);
