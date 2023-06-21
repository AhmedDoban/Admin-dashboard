import React from "react";
import "./Table.scss";

function Table() {
  const data = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <div
      className="Table"
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <table>
        <tr>
          <th>Tracking ID</th>
          <th>Product</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment Method</th>
          <th>Status</th>
        </tr>
        {data.map((item) => (
          <tr>
            <td data-label="Tracking ID">{item.id}</td>
            <td data-label="Product">
              <div className="cellWrapper">
                <img src={item.img} alt="" className="image" />
                {item.product}
              </div>
            </td>
            <td data-label="Customer">{item.customer}</td>
            <td data-label="Date">{item.date}</td>
            <td data-label="Amount">{item.amount}</td>
            <td data-label="Payment Method">{item.method}</td>
            <td data-label="Status">
              <span className={`status ${item.status}`}>{item.status}</span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Table;
