import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="left">
        <input type="search" placeholder="Search..." />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="right">
        <div className="box">
          <i className="fa-solid fa-earth-europe"></i>
          <span>English</span>
        </div>
        <div className="box">
          <i className="fa-regular fa-moon"></i>
          {/* <i className="fa-solid fa-sun"></i> */}
        </div>
        <div className="box">
          <i className="fa-solid fa-compress"></i>
        </div>
        <div className="box">
          <i className="fa-regular fa-bell"></i>
          <div className="count">1</div>
        </div>
        <div className="box">
          <i className="fa-regular fa-message"></i>
          <div className="count">7</div>
        </div>
        <div className="box">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="box">
          <img src={require("../../img/user.png")} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
