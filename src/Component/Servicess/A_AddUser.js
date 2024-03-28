import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../A_UserServices"; 
const A_AddUser = () => {
  const [username, setUsername] = useState("");
  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [moNo, setMobile] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const [role, setRole] = useState("");

  useEffect(()=>{

   
    if (id) {
        console.log("UseeEffect Of This method");
        getUser(id).then((response)=>{
            return response.json();
        }).then((data)=>{
console.log("Hello Userrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"+data);
            setUsername(data.username);
            setMobile(data.moNo);
            setEmail(data.emailid)
            setPassword(data.password)
        }).catch((error)=>{
            // console.log(error);
        })
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, emailid, password, moNo, role }),
      });
      // console.log("Response received:", response);
      if (response.ok) {
        console.log("Registration successful");
        setLoggedIn(true);
      } else {
        console.error("Registration failed");
        setLoggedIn(false);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  console.log("admin Login Opened");

  if (loggedIn && role === "admin") {
    console.log("admin Login Opened");

    navigate("/login");
  }

  if (loggedIn && role === "user") {
    navigate("/userlogin");
  }
  function pageTitle() {
    if (id) {
      return <h3 className="card-title text-center mb-1">Update User</h3>;
    } else {
      return <h3 className="card-title text-center mb-1">Registration Form</h3>;
    }
  }

  function userLog() {
    if (id) {
      return <></>;
    } else {
      return (
        <div>
          <label>Role:</label>
          <select
            name="role"
            required
            value={role} // Set value of role dropdown
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
      );
    }
  }

  return (
    <div className="container ">
        <br /><br /><br />
      <div className="row ">
        <div className="card col-md-6 pffset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label className="form-label">Username:</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
                value={emailid}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                placeholder="Enter Your PassWord"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile No:</label>
              <input
                type="text"
                className="form-control"
                value={moNo}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            {/* <div>
                  <label>Role:</label>
                  <select
                    name="role"
                    required
                    value={role} // Set value of role dropdown
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div> */}
            {userLog()}
            <br />
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default A_AddUser;
