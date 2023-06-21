import React, { useState } from "react";
import "./Featurs.scss";
import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
} from "recharts";

function Featurs() {
  const [Progress, SetProgress] = useState(70);
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];
  return (
    <div className="Featurs">
      {/******************* total-revenue ***********************/}
      <div className="total-revenue">
        <div className="titel">
          <p>total-revenue</p>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

        <div className="total-revenue-content">
          <div
            className="progress-circle"
            data-progress={Progress}
            style={{ "--progress": `${Progress}%` }}
          />
          <p>Total Sales Made today</p>
          <h2 className="amount">$ 420</h2>
          <p className="desc">
            Previous transactions processing. Last payments may not be included.
          </p>
        </div>
        <div className="total-revenue-footer">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <i className="fa-solid fa-chevron-down"></i>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <i className="fa-solid fa-chevron-up"></i>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <i className="fa-solid fa-chevron-down"></i>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
      {/******************* Last6months ***********************/}
      <div className="Last6months">
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
  );
}
export default Featurs;
