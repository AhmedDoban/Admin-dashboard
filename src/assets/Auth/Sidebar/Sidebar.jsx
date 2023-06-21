import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

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
            <Link>
              <i className="fa-solid fa-chart-line"></i>
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="box">
        <div className="titel">
          <p>Lists</p>
        </div>
        <ul>
          <li>
            <Link>
              <i className="fa-solid fa-user"></i>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-solid fa-shop"></i>
              <span>Proudacts</span>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-solid fa-store"></i>
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-solid fa-truck"></i>
              <span>Delivery</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="box">
        <div className="titel">
          <p>Useful</p>
        </div>
        <ul>
          <li>
            <Link>
              <i className="fa-solid fa-signal"></i>
              <span>Status</span>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-solid fa-bell"></i>
              <span>Notificationss</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="box">
        <div className="titel">
          <p>Services</p>
        </div>
        <ul>
          <li>
            <Link>
              <i className="fa-solid fa-leaf"></i>
              <span>System Health</span>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-solid fa-gears"></i>
              <span>Logs</span>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-solid fa-gear"></i>
              <span>Setting</span>
            </Link>
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
