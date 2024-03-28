import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const View_AllPost = (props) => {
  const [mydata, setData] = useState([]);
  const navigator = useNavigate();
  const { id } = useParams();
  const { username } = useParams();

  useEffect(() => {
    fetchData(username);
  }, []);

  const fetchData = (username) => {
    console.log("Give Me The All User Post ");
    fetch(`http://localhost:8080/api/getallpost`)  //${props.id}
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };


  
  const deletePostuser = (id) => {
    // Implement your logic to handle the update action
    console.log("delete emp with ID:", id);

    // navigator(`/delete/${id}`);
// console.log(id);
// const deleteUser = (id) => {
fetch(`http://localhost:8080/api/deleteuserpost/${id}`,{
  method: "Delete",
// }).then((res)=>{
// return res.json()
}).then((data)=>{
  fetchData();
}).catch((err)=>{
  console.log(err);
})

  };
  return (
    <div className=" p-3 mb-2 bg-primary-subtle text-primary-emphasis">
      <br />
      <br />
      <h2 className=" mb-2 bg-primary-dark text-center ">User Post </h2>
      <br />
      <br />
      <div className="row">
        {mydata.map((emp) => (
          <div key={emp.id} className="col-md-6">
            <div className="card border-secondary mb-4">
              <div className="card-header bg-secondary text-white">
                <h5 className="card-title mb-2 text-center">Feed Post</h5>
              </div>
              <div className="card-body">
                <h5 className="card-text text-center text-dark text-lg">{emp.post}</h5> <br />
                <p className="card-text mt-2">Date  : {emp.date}</p> <br />
                <p className="card-text">Created  : {emp.name}</p>
                {/* <p className="card-text">Created: {emp.id === emp.id ? "Own" : "Guest"}</p> */}
                {/* <p className="card-text">Mobile Number: {emp.moNo}</p> */}
                <br />
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary btn-sm" onClick={() => navigator(`/update/${emp.id}`)}>Aprove</button>
                  {/* <button className="btn btn-danger btn-sm" onClick={() => navigator(`/delete/${emp.id}`)}>Delete</button> */}
                
                {/* Do NOT REMOVE */}
                  <button className="btn btn-danger btn-sm" onClick={() => deletePostuser(emp.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View_AllPost;
