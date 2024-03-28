import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function UserLogin() {
  const [role, setRoll] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const navigator = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
///*****************Register User ************************* */
  function registerUser() {
    navigator("/register");
  }




  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch staff data from the API based on username
      const response = await fetch(
        "http://localhost:8080/api/userlogin/" + username
      );
      const userData = await response.json();
      // console.log(userData);

      if (Array.isArray(userData)) {
        // If userdata is an array, check if any user matches the provided username and password
        const validUser = userData.find(
          (userEntry) => userEntry.password === password
        );

        if (validUser) {
          setLoggedIn(true);
        } else {
          console.log("Invalid credentials");
        }
      } else if (typeof userData === "object") {
        // If userData is an object (single entry), check the username and password
        if (userData.password == password && userData.username === username) {
          setLoggedIn(true);
          setRoll(userData.role);

          console.log("UserLogin Page Ok ");
        } else {
          console.log("Invalid credentials");
          setError("Invalid username or password");
        }
      } else {
        console.log("Invalid response format");
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error fetching User data:", error);
      
      setError("Invalid username or password");
      window.location.reload();
    }
  };

  if (loggedIn) {
    // return <Navigate to="/feeds" />;
    if (role === "user") {
      navigator(`/feedpage/${username}`);
    } else if (role === "admin") {
      
      window.location.reload();

      //here We can Add The Admin Navigator
    } else {
      // setError('Wrong user');
      //   navigator(`/`);
      window.location.reload();

    }
  }

  return (
    <div className="container mt-5">
      <br />
      <br />
      <br />
      <br />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">User Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
                {/* <button type="submit" className="btn btn-primary w-100">Register</button> */}
              </form>
              {/*   <li className="nav-item" col='03'>
                         <Link className="nav-link" to="/register" ><button onClick={registerUser}> Register User</button></Link> 
            </li>    */}

              <br />
              <div className="text-center">
                <button className="btn btn-primary" onClick={registerUser}>
                  {" "}
                  Register User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default UserLogin;
