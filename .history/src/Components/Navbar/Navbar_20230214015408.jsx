import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="nav-logo">
        <a href="https://lendrive.web.id/">
          <img
            src="http://lendrive.web.id/wp-content/uploads/2021/11/Lendrive-03-November-2021.png"
            alt=""
          />
        </a>
      </div>
      <div className="nav-search">
        <input type="search" id="search" />
        <label htmlFor="search">
          <span class="material-symbols-outlined">search</span>
        </label>
      </div>
      <div className="nav-util">
        <span class="material-symbols-outlined">grid_view</span>
        
      </div>
    </div>
  );
};

export default Navbar;
