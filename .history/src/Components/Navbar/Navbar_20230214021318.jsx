import React from "react";
import "./navbar.css";
import {} from 'r'

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-top">
      <div className="nav-logo">
        <a href="https://lendrive.web.id/">
          <img
            src="http://lendrive.web.id/wp-content/uploads/2021/11/Lendrive-03-November-2021.png"
            alt=""
          />
        </a>
      </div>
      <div className="nav-search">
        <input type="search" id="search" placeholder="search ..."/>
        <label htmlFor="search">
          <span class="material-symbols-outlined">search</span>
        </label>
      </div>
      <div className="nav-util">
        <span class="material-symbols-outlined windows">grid_view</span>
        <button className="toggle">
          <span class="material-symbols-outlined on">toggle_on</span>
          <span class="material-symbols-outlined off">toggle_off</span>
        </button>
      </div>
      </div>
      <div className="nav-bot">
        <div className="nav-bot-links">
            <link></link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
