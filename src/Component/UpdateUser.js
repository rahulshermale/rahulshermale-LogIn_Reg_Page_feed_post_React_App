import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [moNo, setMobile] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  const fetchData = (id) => {
    fetch(`http://localhost:8080/api/getallid/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.username);
        setEmail(data.emailid);
        setPassword(data.password);
        setMobile(data.moNo);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/add/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, username, emailid, password, moNo }),
      });
      if (response.ok) {
        console.log("Registration successful");
        setLoggedIn(true);
        navigate("/about");
      } else {
        console.error("Registration failed");
        setLoggedIn(false);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center btn-secondary mb-4">Update User</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    value={emailid}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Mobile No:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Mobile No"
                    value={moNo}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                  <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
