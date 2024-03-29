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

  useEffect(()=>{
    // forLoops();
  },[])

async function myfetch(username) {
  try {
    const response = await fetch(`http://localhost:8080/api/getfeed`);
    if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        console.log("Admin All Enquerry result", result[0]);
    
      setMydata(result);

     
    }catch(error) {
        console.error("Error fetching posts:", error);
      };
  } 

  setTimeout(() => {
    // forLoops();
   
    // Your function to execute after 1 second
  
  }, 3000);

  


/************************************************************************* */
  const approvePost = async(e,postId) => {
    e.preventDefault();
    console.log("*******************************************************  " + id );

/*********************************** */
forLoops(postId)

     function forLoops(jk){
  // console.log("MY FOR EACH METHOD");
  // mydata.forEach((obj) => {
       let obj=mydata[jk];
    console.log("MY FOR EACH METHOD No 222222222222222222222"+ obj);

    setName(obj.name);
    setDate(obj.date);
    setPost(obj.post);
    // setId(obj.id);
    
    setRole(obj.registerlog.role);
    setUsername(obj.registerlog.username);
        console.log(`For Eaach Method_________ SET USER DATA WITH ID    ID: ${obj.id}, Name: ${obj.date}  ${obj.post}   ${obj.name} REG : ${obj.registerlog.role}`);

}

/********************************************************** */

    // let obj=mydata[postId];
    // setPost(obj.post);

    try {
      const response = await fetch(`http://localhost:8080/api/addpostuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, role, post, date, name }),
          });

      console.log("Giving the response " + response);
      if (response.ok) {
        console.log("Post created successfully");
        // window.prompt("Post submitted successfully!");
        window.location.reload();
        // const result = window.confirm("Post Succsesfully Create You Want to show your Post");
          setpostLogged(true);
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
      
      navigate("/");
      navigate(`/mypost/${username}`);
    } else {
      navigate(-1);
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
            <div
              key={post.id}
              className="card mb-5 shadow-sm bg-success p-2 text-white bg-opacity-50"
            >
              {/* {console.log("Map Inside00000000000000000000000000000000000000000000000000 " + post.id)} */}

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
                  Created by: {post.name.toUpperCase()}
                 
                  <br />
                  <br />
                </h6>
                <br />
                <br />
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-secondary btn-md"
                    onClick={(e) => approvePost(e,post.id)}
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
          ))}
        </Col>
      </Row>
    </Container>
  );
          }
        
export default AdminAllenq;
