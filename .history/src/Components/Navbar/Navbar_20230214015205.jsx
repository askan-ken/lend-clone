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
        <input type="sear" />
      </div>
    </div>
  );
};

export default Navbar;
