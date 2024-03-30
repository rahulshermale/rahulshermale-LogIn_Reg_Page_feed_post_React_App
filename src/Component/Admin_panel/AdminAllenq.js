import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import AdminButtons from "./AdminButtons";
import { useNavigate, useParams } from "react-router-dom";

function AdminAllenq() {
  const [mydata, setMydata] = useState([]);
  const { username } = useParams();
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [usrname, setUsername] = useState("");
  const [post, setPost] = useState("");
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [role,setRole] = useState("");
  
  const [successpost, setpostLogged] = useState(false);





  useEffect(() => {
    myfetch(username);
   
  }, [username]);

 

async function myfetch() {
  try {
    const response = await fetch(`http://localhost:8080/api/getfeed`);
    if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        console.log("Admin All Enquerry result", result[3]);
    
      setMydata(result);

     
    }catch(error) {
        console.error("Error fetching posts:", error);
      };
  } 

 


/************************************************************************* */
  async function approvePost (e,abc) {
    console.log(e +    "***************************Hellllooo****************************  " + abc );
    e.preventDefault();
   
    console.log("The id is Post Request "+ abc);
    try {
      const response = await fetch(`http://localhost:8080/api/getalljoin/${abc}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, role, post, date, name }),
          });

      console.log("Giving the response " + response);
      if (response.ok) {
        console.log("Post created successfully");
        deletePostuser(post.id);
        window.location.reload();
        // const result = window.confirm("Post Succsesfully Create You Want to show your Post");
          // setpostLogged(true);
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


  };
/********************************************************************************* */
  const deletePostuser = (id) => {

    fetch(`http://localhost:8080/api/deleteuser/${id}`,{
  method: "Delete",

}).then((data)=>{
  myfetch();
}).catch((err)=>{
  console.log(err);
})
       console.log("delete emp with ID:", id);

  };


  return (
    <Container fluid>
      <Row>
        <AdminButtons />
        <Col
          md="6"
          mr="4"
          className="mx-auto text-center p-3 mb-2  text-primary-emphasis"
        >
          
          {mydata.map((post) => (
            // post.feedId && (
            <div
              key={post.feedId}
              className="card mb-5 shadow-sm bg-success p-2 text-white bg-opacity-50"
            >
              {console.log("Map Inside00000000000000000000000000000000000000000000000000 " + post.feedId)}

              {}
              {/* {console.log("AdminAll enq Comp Post ID " + post.post)}
              {console.log("AdminAll enq Comp Post ID " + post.date)}
              {console.log("AdminAll enq Comp Post name " + post.name)}
              {console.log("AdminAll enq Comp Post role " + post.role)}
              {console.log("AdminAll enq Comp Post username " + post.username)} */}
              <div className="card-body">
                {/* <h5 className="card-title bg-primary-subtle">{post.pid}</h5> */}
                <p className="card-text">{post.registerlog.role}</p>
                <h6 className="card-text text-dark p-3 mb-2 bg-light text-dark text-primary-emphasis">
                  {" "}
                  {post.registerlog.username}
                </h6>
                <br />
                <h6 className="card-text text-dark p-3 mb-2 bg-light text-dark text-primary-emphasis">
                  Date: {post.date}
                </h6>
                <br />

                <h6 className="card-text p-3 mb-2 bg-info-subtle text-info-emphasis">
                  <br />
                  Created by: {post.post}
                 
                  <br />
                  <br />
                </h6>
                <br />
                <h6 className="card-text p-3 mb-2 bg-info-subtle text-info-emphasis">
                  <br />
                  feed id: {post.feedId}
                 
                  <br />
                  <br />
                </h6>
                <br />
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-secondary btn-md"
                    onClick={(e) => approvePost(e,post.feedId)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-danger btn-md"
                    onClick={() => deletePostuser(post.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          // )
          ))}
        </Col>
      </Row>
    </Container>
  );
          }
        
export default AdminAllenq;
