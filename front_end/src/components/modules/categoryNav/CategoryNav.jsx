import React from "react";
import "./CategoryNav.css";
import CategoryNavCard from "./CategoryNavCard";

const categoryList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const CategoryNav = () => {
  return (
    <>
      <div className="category_nav">
        <div className="category_list_box">
          <ul className="category_list">
            {categoryList?.map(() => (
              <li>
                <CategoryNavCard />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoryNav;
