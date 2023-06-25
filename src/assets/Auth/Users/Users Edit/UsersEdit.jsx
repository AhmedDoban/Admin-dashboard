import React, { useEffect, useState } from "react";
import "./UsersEdit.scss";
import Table from "../../Table/Table";
import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
} from "recharts";
import { useParams } from "react-router-dom";
import axios from "axios";
import LodingFeachData from "../../Loding Feach Data/LodingFeachData";

function UsersEdit() {
  const params = useParams();
  const [user, SetUser] = useState({});
  const [Loading, SetLoading] = useState(false);
  const GetUsers = async () => {
    try {
      SetLoading(true);
      await axios
        .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then((res) => {
          if (res.status === 200) {
            SetUser(res.data);
            SetLoading(false);
          }
        });
    } catch (Err) {
      throw Err;
    }
  };
  console.log(user);
  useEffect(() => {
    GetUsers();
  }, []);
  console.log(params.id);
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];
  return (
    <React.Fragment>
      {Loading ? (
        <LodingFeachData />
      ) : (
        <div className="UsersEdit">
          <div className="top">
            <div
              className="left"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img
                  src={require("../../../img/user.png")}
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">{user.name}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email :</span>
                    <span className="itemValue">{user.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone :</span>
                    <span className="itemValue">{user.phone}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address :</span>
                    <span className="itemValue">
                      {user.address?.street} , {user.address?.suite} ,
                      {user.address?.city}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">website :</span>
                    <span className="itemValue">{user.website}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">company :</span>
                    <span className="itemValue">{user.company?.name}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">company bs :</span>
                    <span className="itemValue">{user.company?.bs}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">website catch Phrase :</span>
                    <span className="itemValue">
                      {user.company?.catchPhrase}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="right"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <p>Total 6 Month</p>
              <AreaChart width={750} height={370} data={data} className="Chart">
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="name"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="Total"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </div>
          </div>

          <div className="bottom">
            <Table />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default UsersEdit;
