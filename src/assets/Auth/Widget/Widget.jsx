import React from "react";
import "./Widget.scss";
import { Link } from "react-router-dom";

function Widget(props) {
  return (
    <div className="Widget">
      <div className="titel">
        <p>{props.titel}</p>
        {props.type === "High" ? (
          <div className="percintage Hight">
            <i className="fa-solid fa-chevron-up"></i>
            <p>{props.percintage} %</p>
          </div>
        ) : (
          <div className="percintage Low">
            <i className="fa-solid fa-chevron-down"></i>
            <p>{props.percintage} %</p>
          </div>
        )}
      </div>
      <h1 className="body">{props.count}</h1>
      <div className="Widget-footer">
        <Link to={props.Link}>View All {props.titel}</Link>
        <i className={props.icon}></i>
      </div>
    </div>
  );
}
export default Widget;
