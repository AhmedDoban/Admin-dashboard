import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Users.scss";
import { Link } from "react-router-dom";
import LodingFeachData from "../Loding Feach Data/LodingFeachData";

function Users() {
  const [Sort, SetSort] = useState("Ascending");
  const [Loading, SetLoading] = useState(false);
  const [SortType, SetSortType] = useState("");

  const [Users, SetUsers] = useState([]);

  const HandleSort = (type) => {
    SetSortType(type);
    if (Sort === "Ascending") {
      const NewData = [...Users].sort((a, b) => (a[type] > b[type] ? 1 : -1));
      SetUsers(NewData);
      SetSort("Descending");
    }
    if (Sort === "Descending") {
      const NewData = [...Users].sort((a, b) => (a[type] < b[type] ? 1 : -1));
      SetUsers(NewData);
      SetSort("Ascending");
    }
  };

  const HandleDelete = (id) => {
    const AllUsers = [...Users];
    let EditData = AllUsers.filter((user) => user.id !== id);
    SetUsers(EditData);
  };

  const GetUsers = async () => {
    try {
      SetLoading(true);
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          if (res.status === 200) {
            SetUsers(res.data);
            SetLoading(false);
          }
        });
    } catch (Err) {
      throw Err;
    }
  };

  useEffect(() => {
    GetUsers();
  }, []);

  return (
    <React.Fragment>
      <div className="users">
        {Loading ? (
          <LodingFeachData />
        ) : (
          <div className="USerTable">
            <div className="addsection">
              <h1>Add New User</h1>
              <Link to="New User/new">Add New</Link>
            </div>
            <table>
              <tr>
                <th onClick={() => HandleSort("id")}>
                  {SortType === "id" && Sort === "Ascending" ? (
                    <i className="fa-solid fa-arrow-up" />
                  ) : SortType === "id" && Sort === "Descending" ? (
                    <i className="fa-solid fa-arrow-down" />
                  ) : (
                    <i className="fa-solid fa-arrows-up-down" />
                  )}
                  id
                </th>
                <th onClick={() => HandleSort("name")}>
                  {SortType === "name" && Sort === "Ascending" ? (
                    <i className="fa-solid fa-arrow-up" />
                  ) : SortType === "name" && Sort === "Descending" ? (
                    <i className="fa-solid fa-arrow-down" />
                  ) : (
                    <i className="fa-solid fa-arrows-up-down" />
                  )}
                  Name
                </th>
                <th onClick={() => HandleSort("email")}>
                  {SortType === "email" && Sort === "Ascending" ? (
                    <i className="fa-solid fa-arrow-up" />
                  ) : SortType === "email" && Sort === "Descending" ? (
                    <i className="fa-solid fa-arrow-down" />
                  ) : (
                    <i className="fa-solid fa-arrows-up-down" />
                  )}
                  Email
                </th>
                <th onClick={() => HandleSort("phone")}>
                  {SortType === "phone" && Sort === "Ascending" ? (
                    <i className="fa-solid fa-arrow-up" />
                  ) : SortType === "phone" && Sort === "Descending" ? (
                    <i className="fa-solid fa-arrow-down" />
                  ) : (
                    <i className="fa-solid fa-arrows-up-down" />
                  )}
                  Phone
                </th>
                <th>Actions</th>
              </tr>
              {Users.slice(0, 15).map((user) => (
                <tr key={user.id}>
                  <td data-label="ID">{user.id}</td>
                  <td data-label="name">{user.name}</td>
                  <td data-label="email">{user.email}</td>
                  <td data-label="phone">{user.phone}</td>
                  <td>
                    <div className="actions">
                      <Link to={`${user.id}`}>
                        <i className="fa-solid fa-pen-to-square view" />
                      </Link>
                      <i
                        className="fa-solid fa-trash delete"
                        onClick={() => HandleDelete(user.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
export default Users;
