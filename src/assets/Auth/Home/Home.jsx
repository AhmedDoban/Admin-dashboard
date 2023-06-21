import React from "react";
import Widget from "../Widget/Widget";
import Featurs from "../Featurs/Featurs";
import Table from "../Table/Table";

export default function Home() {
  return (
    <React.Fragment>
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
      <Table />
    </React.Fragment>
  );
}
