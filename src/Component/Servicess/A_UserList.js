import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { listEmp } from "./A_EmpServicess";
import { listEmp } from "../A_UserServices"; 

const A_UserList = () => {
  const [mydata, setData] = useState([]);
  const navigator = useNavigate();
  
const {id}=useParams();


  useEffect(() => {
    listEmp().then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setData(data)
    }).catch((error)=>{
      console.log(error);})
  }, []);


  function updateUsers(id) {
  

    navigator( `/updateabc/${id}`)
  }
  const deleteemp = (id) => {
    // Implement your logic to handle the update action
    console.log("delete emp with ID:", id);

    // navigator(`/delete/${id}`);
  };

  function pageTitle() {
    if (id) {
     return <h2>Update User</h2>;
    } else {
     return ;
    }
  }
  return (
    <div className="container mt-3">
      {pageTitle()}
      <h2>List User</h2>
      <div className="container mt2 borederd">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>User Id</th>
              <th>UserName</th>
              <th>Email Id</th>
              <th>Mobile No</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mydata.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.username}</td>
                <td>{emp.emailid}</td>
                <td>{emp.moNo}</td>
                <td>
                  <button
                    className="btn btn-secondary btn-sm text-center"
                    onClick={() => updateUsers(emp.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => deleteemp(emp.id)}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default A_UserList;
