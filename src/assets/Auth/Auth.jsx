import React from "react";
import "./Auth.scss";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Users from "./Users/Users";

function Auth() {
  return (
    <div className="Auth">
      <Sidebar />
      <div className="page-wrapper">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}
export default Auth;
