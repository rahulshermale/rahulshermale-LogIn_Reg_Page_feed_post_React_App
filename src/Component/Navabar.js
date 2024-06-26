import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

const Navbar1 = () => {


  const onLogOut = () => {
    localStorage.removeItem("loginUser");
    window.location.href = "/home";
  };


  return (
    <Navbar sticky='' expand="lg" className="p-3 mb-2 bg-secondary text-white custom-navbar navbar-expand-lg  bg-primary">
       <Container className=' bg-secondary text-white'>
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container"> */}
            <img src="/images/computer.png" alt="Logo" />
       <div>
            {/* <h4>My App</h4> */}
<br /></div>
        <button className="navbar-toggler text">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {/* <Link className="nav-link" to="/feed">Feed</Link> */}
            </li>
            <li className="nav-item">
        <Link className="navbar-brand" >My Website</Link>
              {/* <Link className="nav-link" to="/feed">Feed</Link> */}
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">List </Link> */}
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/login">Admin Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userlogin">User Login</Link>
            </li>*/}
          </ul> 
          <NavDropdown title="Login Panel" id="basic-nav-dropdown" className="custom-nav-link">
              <NavDropdown.Item href="login">Admin Login</NavDropdown.Item>
              <NavDropdown.Item href="userlogin" to="/userlogin">User Login</NavDropdown.Item>
            </NavDropdown>
           
        </div>
      {/* </div>
    </nav> */} <div> <button className="btn mt-3" onClick={onLogOut}>
                Logout
              </button></div>
    </Container>
    </Navbar>
  );
};

export default Navbar1;
