import React, { useRef, useState } from "react";
import "./NewUser.scss";

function NewUser() {
  const UserImg = useRef("");
  const [UserData, SetUserData] = useState({
    UserName: "",
    FirstName: "",
    LastName: "",
    Email: "",
    password: "",
    Phone: "",
    Address: "",
    Country: "",
    img: require("../../../img/user.png"),
  });
  const HandelImgChange = (e) => {
    UserImg.current.src = URL.createObjectURL(e.target.files[0]);
    SetUserData({ ...UserData, img: UserImg.current.src });
  };
  return (
    <React.Fragment>
      <div className="NewUser">
        <div className="box">
          <h1>Add New User page</h1>
          <div className="content">
            <div className="left">
              <div className="img-container">
                <input
                  type="file"
                  onChange={(e) => HandelImgChange(e)}
                  id="userimg"
                />
                <label htmlFor="userimg">
                  <i class="fa-solid fa-cloud-arrow-up"></i>
                  Change
                </label>
                <img src={UserData.img} alt="User img" ref={UserImg} />
              </div>
            </div>
            <div className="right">
              <div className="left">
                <div className="input-box">
                  <label htmlFor="UserName">User Name</label>
                  <input
                    type="text"
                    value={UserData.UserName}
                    onChange={(e) =>
                      SetUserData({ ...UserData, UserName: e.target.value })
                    }
                    id="UserName"
                    placeholder="Ahmed_Doban"
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="FirstName">First Name</label>
                  <input
                    type="text"
                    value={UserData.FirstName}
                    onChange={(e) =>
                      SetUserData({ ...UserData, FirstName: e.target.value })
                    }
                    id="FirstName"
                    placeholder="Ahmed"
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="LastName">Last Name</label>
                  <input
                    type="text"
                    value={UserData.LastName}
                    onChange={(e) =>
                      SetUserData({ ...UserData, LastName: e.target.value })
                    }
                    id="LastName"
                    placeholder="Doban"
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="Phone">Phone</label>
                  <input
                    type="phone"
                    value={UserData.Phone}
                    onChange={(e) =>
                      SetUserData({ ...UserData, Phone: e.target.value })
                    }
                    id="Phone"
                    placeholder="+1 234 567 89"
                  />
                </div>
              </div>
              <div className="right">
                <div className="input-box">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="Email"
                    value={UserData.Email}
                    onChange={(e) =>
                      SetUserData({ ...UserData, Email: e.target.value })
                    }
                    id="Email"
                    placeholder="AhmedDoban@gmail.com"
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    value={UserData.password}
                    onChange={(e) =>
                      SetUserData({ ...UserData, password: e.target.value })
                    }
                    id="password"
                    placeholder="password"
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="Address">Address</label>
                  <input
                    type="text"
                    value={UserData.Address}
                    onChange={(e) =>
                      SetUserData({ ...UserData, Address: e.target.value })
                    }
                    id="Address"
                    placeholder="Elton St. 216 NewYork"
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="Country">Country</label>
                  <input
                    type="text"
                    value={UserData.Country}
                    onChange={(e) =>
                      SetUserData({ ...UserData, Country: e.target.value })
                    }
                    id="Country"
                    placeholder="USA"
                  />
                </div>
              </div>
            </div>
          </div>
          <button>Add</button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default NewUser;
