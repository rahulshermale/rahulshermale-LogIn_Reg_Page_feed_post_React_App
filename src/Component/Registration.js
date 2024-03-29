import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getUser } from "./Servicess/A_EmpServicess";

const RegistrationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [moNo, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      getUser(id)
        .then((response) => {
          setUsername(response.data.username);
          setMobile(response.data.moNo);
          setEmail(response.data.emailid);
          setPassword(response.data.password);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks for all input fields
    const errors = {};
    if (!username.trim()) {
      errors.username = "Username is required";
    }
    if (!emailid.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailid)) {
      errors.email = "Email address is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 4) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (!moNo.trim()) {
      errors.moNo = "Mobile number is required";
    }else if (moNo.length<10 || moNo.length>10) {
      errors.moNo = "Enter Valid Number";
    }

    if (Object.keys(errors).length === 0) {
      // No errors, submit form
      try {
        const response = await fetch(`http://localhost:8080/api/${id ? "update" : "add"}`, {
          method: id ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, emailid, password, moNo, role }),
        });

        if (response.ok) {
          console.log("Registration successful");
          setLoggedIn(true);
          if (role==='admin') {
            
            navigate("/login");
          }else if (role==='user') {

            navigate("/userlogin");
            
          }else{
            navigate(-1)
          }

        } else {
          console.error("Registration failed");
          setLoggedIn(false);
        }
      } catch (error) {
        console.error("Error registering:", error);
      }
    } else {
      // Update errors state to trigger error display
      setErrors(errors);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-1">{id ? "Update User" : "Registration Form"}</h3>
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
                  {errors.username && <div className="text-danger">{errors.username}</div>}
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
                  {errors.email && <div className="text-danger">{errors.email}</div>}
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
                  {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile No:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={moNo}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  {errors.moNo && <div className="text-danger">{errors.moNo}</div>}
                </div>
                {id ? null : (
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
                )}
                <br />
                <button type="submit" className="btn btn-primary">
                  {id ? "Update" : "Register"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
