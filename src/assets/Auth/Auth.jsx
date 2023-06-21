import React from "react";
import "./Auth.scss";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

function Auth() {
  return (
    <div className="Auth">
      <Sidebar />
      <div className="page-wrapper">
        <Navbar />
      </div>
    </div>
  );
}
export default Auth;
