import React from "react";
import "./Auth.scss";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

function Auth() {
  return (
    <div className="Auth">
      <Sidebar />
      <div className="page-wrapper">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
export default Auth;
