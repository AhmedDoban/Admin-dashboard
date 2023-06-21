import React from "react";
import "./Auth.scss";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import Widget from "./Widget/Widget";
import Featurs from "./Featurs/Featurs";

function Auth() {
  return (
    <div className="Auth">
      <Sidebar />
      <div className="page-wrapper">
        <Navbar />
        <div className="widget-container">
          <Widget
            titel="User"
            type="High"
            percintage="10"
            count="100"
            Link="/"
            icon="fa-solid fa-user"
          />
          <Widget
            titel="Orders"
            type="Low"
            percintage="-20"
            count="50"
            Link="/"
            icon="fa-solid fa-cart-shopping"
          />
          <Widget
            titel="Earnings"
            type="High"
            percintage="40"
            count="$ 300"
            Link="/"
            icon="fa-solid fa-dollar-sign"
          />
          <Widget
            titel="Balance"
            type="High"
            percintage="15"
            count="$ 500"
            Link="/"
            icon="fa-solid fa-wallet"
          />
        </div>
        <Featurs />
      </div>
    </div>
  );
}
export default Auth;
