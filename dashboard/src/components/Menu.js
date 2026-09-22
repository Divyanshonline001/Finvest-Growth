import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = ({ username }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = () => {
    setIsProfileDropDown(!isProfileDropDown);
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:4000/logout", {}, { withCredentials: true });
      window.location.href = "http://localhost:3000/signup";
    } catch (error) {
      console.error("Logout failed", error);
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.href = "http://localhost:3000/signup";
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }} onClick={() => handleMenuClick(0)}>
        <img
          src="/Finvest Growth Logo Lockup.png"
          style={{ height: "50px", maxHeight: "54px", width: "auto", objectFit: "contain", cursor: "pointer" }}
          alt="Finvest Growth"
        />
      </Link>
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/holdings"}
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/positions"}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/funds"}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div 
          className="profile" 
          onClick={handleProfileClick} 
          style={{ position: "relative", cursor: "pointer" }}
        >
          <div className="avatar">
            {username ? username.slice(0, 2).toUpperCase() : "ZU"}
          </div>
          <p className="username">{username || "USERID"}</p>

          {isProfileDropDown && (
            <div className="profile-dropdown" onClick={(e) => e.stopPropagation()}>
              <div className="profile-dropdown-header">
                Hi, {username || "User"}
              </div>
              <Link 
                to="/" 
                className="profile-dropdown-link" 
                onClick={() => {
                  handleMenuClick(0);
                  setIsProfileDropDown(false);
                }}
              >
                Dashboard
              </Link>
              <Link 
                to="/orders" 
                className="profile-dropdown-link" 
                onClick={() => {
                  handleMenuClick(1);
                  setIsProfileDropDown(false);
                }}
              >
                Orders
              </Link>
              <hr className="profile-dropdown-divider" />
              <button onClick={handleLogout} className="profile-dropdown-logout">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
