import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

const A_Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/home">My Website</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/abc">User List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/abcd">Add User </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/login">Admin Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userlogin">User Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default A_Navbar;
