import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ApproveUserPost() {
  const [post, setPost] = useState("");
  const [date, setDate] = useState("");
  const [name, setUsername] = useState("");
  const [id, setId] = useState("");
  const [role, setRole] = useState("");

  const { username } = useParams();
  const navigate = useNavigate();

  const [successpost, setpostLogged] = useState(false);
  const [refreshPage, setRefreshPage] = useState(false);

  useEffect(() => {
    fetchData(username);
  }, []);

  const fetchData = async (username) => {
    // console.log("Fetch Username "+username);
    /******************************************************* */
    try {
      console.log("Fethch Data Method Before call");
      const response = await fetch(
        `http://localhost:8080/api/userlogin/${username}`
      );
      console.log("Fethch Data Method After call" + response);
      if (response.ok) {
        const userData = await response.json();
        setUsername(userData.username);
        console.log(
          userData.id + " ************* Set User Id Feeds Comp Checked"
        );
        setId(userData.id);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    try {
      console.log("Fethch Data Method Before call");
      const response = await fetch(
        `http://localhost:8080/api/userlogin/${username}`
      );
      console.log("Fethch Data Method After call" + response);
      if (response.ok) {
        const userData = await response.json();
        setUsername(userData.username);
        console.log(
          userData.id + " ************* Set User Id Feeds Comp Checked"
        );
        setId(userData.id);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("*******************************************************  " + id );

    try {
      const response = await fetch(`http://localhost:8080/api/addpostuser/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, role, post, date, name }),
        // body: JSON.stringify({id, post, date: formattedDate, name }),
      });

      console.log("Giving the response " + response);
      if (response.ok) {
        console.log("Post created successfully");
        // window.prompt("Post submitted successfully!");
        window.location.reload();
        // const result = window.confirm("Post Succsesfully Create You Want to show your Post");

       
        setpostLogged = true;
        // navigate('/about')

        // setRefreshPage(!refreshPage);
      } else {
        console.error("Failed to create post");
        // setRefreshPage(!refreshPage);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      // setRefreshPage(!refreshPage);
    }
    if (successpost) {
      console.log();
      navigate("/");
      navigate(`/mypost/${username}`);
    } else {
      navigate(-1);
    }
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

export default ApproveUserPost;
