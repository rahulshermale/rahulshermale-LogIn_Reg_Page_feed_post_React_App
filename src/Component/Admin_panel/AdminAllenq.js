import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import AdminButtons from "./AdminButtons";

function AdminAllenq(props) {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    myfetch();
  }, []);

  function myfetch() {
    fetch("http://localhost:8080/api/getpost")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        
        return res.json();
      })
      .then((result) => {
        setMydata(result);
        console.log("Admin All Enquerry "+mydata);

      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });

  }
//  console.log("Admin All Enquerry "+mydata[0]);
  const approvePost = (id) => {
    console.log("Update post with ID:", id);
    // Implement your logic for approving a post
  };

  
  const deletePostuser = (id) => {
    // Implement your logic to handle the update action
    console.log("delete emp with ID:", id);

    // navigator(`/delete/${id}`);
// console.log(id);
// const deleteUser = (id) => {

fetch(`http://localhost:8080/api/delete/${id}`,{
  method: "Delete",
// }).then((res)=>{
// return res.json()
}).then((data)=>{
  myfetch();
}).catch((err)=>{
  console.log(err);
})

  };
  return (
    <Container fluid>
      <Row>
        <AdminButtons />
        <Col md="6" mr="4" className="mx-auto text-center p-3 mb-2  text-primary-emphasis">
          {mydata.map((post) => (
            <div key={post.feed_id} className="card mb-5 shadow-sm bg-success p-2 text-white bg-opacity-50">
              {console.log("AdminAllenq Comp "+post.feed_id)}
              <div className="card-body">
                <h5 className="card-title bg-primary-subtle">{post.feed_id}</h5>
                <p className="card-text">{post.content}</p>
                <h6 className="card-text text-dark p-3 mb-2 bg-light text-dark text-primary-emphasis">  {post.post}</h6>
                <br />
                <h6 className="card-text text-dark p-3 mb-2 bg-light text-dark text-primary-emphasis">Date: {post.date}</h6>
                <br />
              
                <h6 className="card-text p-3 mb-2 bg-info-subtle text-info-emphasis">
                <br />
                  Created by: {post.name}
                <br /><br />
                </h6>
                <br />
                <br />
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-secondary btn-md"
                    onClick={() => approvePost(post.id)}
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
