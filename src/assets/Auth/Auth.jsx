import React from "react";
import "./Auth.scss";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Users from "./Users/Users";
import UsersEdit from "./Users/Users Edit/UsersEdit";
import NewUser from "./Users/New User/NewUser";

function Auth() {
  return (
    <div className="Auth">
      <Sidebar />
      <div className="page-wrapper">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/users" element={<Outlet />}>
            <Route path="" element={<Users />} />
            <Route path=":id" element={<UsersEdit />} />
            <Route path="New User/new" element={<NewUser />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
export default Auth;
