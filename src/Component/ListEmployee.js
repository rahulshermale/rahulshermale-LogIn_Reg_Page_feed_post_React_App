import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Listemp = () => {
  const [mydata, setData] = useState([]);
  const navigator = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetcData();
  }, []);

  const fetcData = () => {
    fetch("http://localhost:8080/api/getall")
      .then((response) => {
        console.log(" List Employeeeee"+response);
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((rej) => {
        console.log(rej);
      });
  };
  //Important Code Do Not Delete Below Code
  // const updateemp = (id) => {
  //   // Implement your logic to handle the update action
  //   console.log("Update emp with ID:", id);
  //   //navigator(`/update/${id}`) // this is important to update Data
  //   navigator("/update");
  // };

  function updateUsers(id) {
    navigator(`/update/${id}`);
  }
  const deleteemp = (id) => {
    // Implement your logic to handle the update action
    console.log("delete emp with ID:", id);

    // navigator(`/delete/${id}`);
// console.log(id);
// const deleteUser = (id) => {
fetch(`http://localhost:8080/api/deleteuser/${id}`,{
  method: "Delete",
// }).then((res)=>{
// return res.json()
}).then((data)=>{
  fetcData();
}).catch((err)=>{
  console.log(err);
})

  };
  // }
  function pageTitle() {
    if (id) {
     return <h2>Update User</h2>;
    } else {
     return ;
    }
  }
  return (
    <div className="container mt-3 mt-2 ">
      {pageTitle()}
      <h2 className="text-center bg-info p-2 text-white bg-opacity-75">List User</h2>
      <div className="container mt-2 borederd ">
        <table className="table table-striped table-bordered">
          <thead className="p-3 ">
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
                    className="btn btn-danger"
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

export default Listemp;
