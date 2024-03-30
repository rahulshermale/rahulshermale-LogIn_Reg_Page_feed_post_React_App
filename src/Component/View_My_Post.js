import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const View_My_Post = () => {
  const [mydata, setData] = useState([]);
  const navigator = useNavigate();
  const { username } = useParams();
  const { id } = useParams();

  useEffect(() => {
    fetchData(username);
  }, [username]);

  const fetchData = (username) => {
    console.log("Here We Can Add The Link Of the user post and List " + username);
    fetch(`http://localhost:8080/api/getpost/${username}`) // ${props.id}
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const updateEmployee = (id) => {
    console.log("Update employee with ID:", id);
    navigator("/updatepost");
  };

  const deleteEmployee = (id) => {
    console.log("Delete employee with ID:", id);
    navigator(`/delete/${id}`);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items bg-light mb-">
      <div className="card text-center" style={{ width: "80%" }}>
        <div className="card-body">
           <div>
             <h1 className="card-title bg-primary text-center mb-4">My Post</h1>
             </div>
          <div className="p-3 mb-2 bg-succes text-white">
           
            <div className="row">
              {/* <table className="table table-striped text-center"> */}
                
                  {mydata.map((emp) => (
                    <div key={emp.id} className="col-md-6">
                                  <div className="card border-secondary mb-4">
                                  <div className="card-header bg-secondar text-dark">
                                  <div className="card-body">
                      <h5 className="card-text text-center text-dark text-lg">{emp.post}</h5>
                   
                      <p className="card-text mt-2">Date: {emp.date}</p>
                    
                      <p className="card-text text-center">Created: {emp.userId === id ? "Own" : "Guest"}</p>
                   
                      <p className="card-text text-center">{emp.moNo}</p>
                     
                      <div className="d-flex justify-content-between row">
                        <button
                          className="btn btn-primary btn-sm "
                          onClick={() => updateEmployee(emp.id)}
                        >
                          Update
                        </button>
                      </div>
                      <br />
                      <div className=" justify-content-between row">
                        <button
                          className="btn btn-danger btn-sm "
                          onClick={() => deleteEmployee(emp.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    </div>
                    </div>
                    </div>
                  ))}
                
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_My_Post;
