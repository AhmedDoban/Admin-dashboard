import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="titel">
        <h1>Dashboard</h1>
      </div>
      <div className="box">
        <div className="titel">
          <p>main</p>
        </div>
        <ul>
          <li>
            <NavLink to="">
              <i className="fa-solid fa-chart-line"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="box">
        <div className="titel">
          <p>Lists</p>
        </div>
        <ul>
          <li>
            <NavLink to="/users">
              <i className="fa-solid fa-user"></i>
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Proudacts">
              <i className="fa-solid fa-shop"></i>
              <span>Proudacts</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Orders">
              <i className="fa-solid fa-store"></i>
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Delivery">
              <i className="fa-solid fa-truck"></i>
              <span>Delivery</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="box">
        <div className="titel">
          <p>Useful</p>
        </div>
        <ul>
          <li>
            <NavLink to="/Status">
              <i className="fa-solid fa-signal"></i>
              <span>Status</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Notificationss">
              <i className="fa-solid fa-bell"></i>
              <span>Notificationss</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="box">
        <div className="titel">
          <p>Services</p>
        </div>
        <ul>
          <li>
            <NavLink to="/System Health">
              <i className="fa-solid fa-leaf"></i>
              <span>System Health</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Logs">
              <i className="fa-solid fa-gears"></i>
              <span>Logs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Setting">
              <i className="fa-solid fa-gear"></i>
              <span>Setting</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="box">
        <button>
          <span>Logout</span>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
}
export default Sidebar;
