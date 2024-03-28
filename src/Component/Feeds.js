import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Feeds() {
  const [post, setPost] = useState("");
  const [date, setDate] = useState("");
  const [name, setUsername] = useState("");
  const [id, setId] = useState("");
  const { username } = useParams();
  const navigator = useNavigate();

  
  useEffect(() => {

    
    fetchData(username);
    console.log("useEffect Method After call"+username);
  }, []);
  
  const fetchData = async (username) => {
    console.log("Fetch Username "+username);
/******************************************************* */
try {
  console.log("Fethch Data Method Before call");
  const response =await fetch(`http://localhost:8080/api/userlogin/${username}`);
  console.log("Fethch Data Method After call"+response);
  if (response.ok) {
    const userData =await response.json();
    console.log(userData.username+"  ---------- User Data Checked");
    console.log(userData.id+"  ---------- User Data Checked");
    
   
    // usernam=userData.username
  //  id=userData.id
    setUsername(userData.username);

     setId(userData.id);

  } else {
    console.error("Failed to fetch user data");
  }
} catch (error) {
  console.error("Error fetching data:", error);
}


    /*********************************************************** */
//     const response = await fetch('http://localhost:8080/api/userlogin/'+username).then((response)=>{

//     console.log("Hellloooo   ");
//     // return  response.json()
//     const userData =  response.json()
//     console.log(userData.id);

//     // console.log(userData.username);
//     // setUsername(userData.username);

//     }).then((data)=>{
//       console.log("Ramm");
// console.log(data);

//     })
   
    // fetch(`http://localhost:8080/api/getall/${username}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUsername(data.username);
    //     setId(data.id);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const myDate = new Date();
    const formattedDate = myDate.toISOString().split('T')[0]; // Formats date as YYYY-MM-DD
    setDate(formattedDate);

    console.log(username+"  ---------- User Name Checked");
    try {
      const response = await fetch("http://localhost:8080/api/addpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id, post, date: formattedDate, name }),
      });

      console.log("Giving the response "+response);
      if (response.ok) {
        console.log("Post created successfully");
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }

    navigator(`/mypost/${username}`);
  };

  const viewMyPost = () => {
    navigator(`/mypost/${username}`);
  };

  const viewAllPost = () => {
    // navigator(`/viewallpost/${username}`);
    navigator(`/viewallpost`);
  };

  const onLogOut = () => {
    localStorage.removeItem("loginUser");
    window.location.href = "/userlogin";
  };

  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-top">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body">
              <h3> Feeds Page </h3>
              <div className="row justify-content-center">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Create Your post"
                    className="form-control mt-3"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary mt-3">
                    Create Post
                  </button>
                </form>
                <button className="btn btn-primary mt-3" onClick={viewMyPost}>
                  View My Post
                </button>
                <button
                  className="btn btn-primary mt-3"
                  onClick={viewAllPost}
                >
                  View Other User Post
                </button>
              </div>
              <button className="btn mt-3" onClick={onLogOut}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
