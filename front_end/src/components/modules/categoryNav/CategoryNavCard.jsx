import React from "react";
import "./CategoryNav.css";
import { FaChevronDown } from "react-icons/fa";

const CategoryNavCard = ({ data }) => {
  const isSubcategory = false;
  return (
    <div className="category_card">
      <img
        src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
        alt=""
      />
      <p>Grocery {isSubcategory && <FaChevronDown />}</p>
    </div>
  );
};

export default CategoryNavCard;
