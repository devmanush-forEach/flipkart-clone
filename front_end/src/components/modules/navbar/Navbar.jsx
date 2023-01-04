import React, { useState } from "react";
import "./Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const user = null;

  const handleSearch = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    e.preventDefault();

    setSearchValue(e.target.value);
  };
  return (
    <header>
      <nav>
        <div className="nav_logo_box">
          <img src="./images/flipkart_nav_logo.png" alt="" />
          <div className="explore_plus">
            explore
            <span> plus</span>
            <img src="./images/plus_sign.png" alt="" />
          </div>
        </div>
        <div className="nav_search_box">
          <form action="" onsubmit={handleSearch} className="nav_search_form">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              onChange={handleChange}
              value={searchValue}
            />
            <button type="submit">
              <IoMdSearch />
            </button>
          </form>
        </div>
        <div className="nav_user_options">
          {user ? (
            <>
              <div className="nav_username">{user?.name}</div>
            </>
          ) : (
            <>
              <button className="login_btn">Login</button>
            </>
          )}
        </div>
        <div className="nav_seller_options">
          <Link className="link seller_link" to="/">
            Become a Seller
          </Link>
        </div>
        <div className="nav_more_options">
          More <FaChevronDown className="down_head" />
        </div>
        <div className="nav_cart_option">
          <FaShoppingCart /> Cart
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
