import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
const navigator=useNavigate();
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    
function registerUser(){

    navigator('/register')
}
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            // Fetch staff data from the API based on username
            const response = await fetch('http://localhost:8080/api/userlogin/'+username);
            const userData = await response.json();
            console.log(userData);
    
            if (Array.isArray(userData)) {
                // If userdata is an array, check if any user matches the provided username and password
                const validUser = userData.find(
                    userEntry => userEntry.password === password 
                );
    
                if (validUser) {
                    setLoggedIn(true);
                } else {
                    console.log('Invalid credentials');
                }
            } else if (typeof userData === 'object') {
                // If userData is an object (single entry), check the username and password
                if (userData.password == password && userData.username === username) {
                    setLoggedIn(true);
                } else {
                    console.log('Invalid credentials');
                }
            } else {
                console.log('Invalid response format');
            }
        } catch (error) {
            console.error('Error fetching staff data:', error);
        }
    };

    // if (loggedIn) {
    //     // return <Navigate to="/feeds" />;
    //     navigator('/about')

    // }

    if (loggedIn) {
        return <Navigate to="/admindash" />;
    }
    return (
        <div className="container mt-5">
            <br/><br/><br/><br/>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Admin Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
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
                                    <label htmlFor="password" className="form-label">Password:</label>
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


                                <button type="submit" className="btn btn-primary w-100">Login</button>
                                {/* <button type="submit" className="btn btn-primary w-100">Register</button> */}
                            </form>
                          {/*   <li className="nav-item" col='03'>
                         <Link className="nav-link" to="/register" ><button onClick={registerUser}> Register User</button></Link> 
            </li>    */}
           
           <br />
           <div className='text-center'>
           <button className='btn btn-primary' onClick={registerUser}> Register User</button>

           </div>

                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/>

        </div>
    );    
}

export default AdminLogin;