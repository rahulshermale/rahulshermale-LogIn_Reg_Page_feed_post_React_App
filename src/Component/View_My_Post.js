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
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <div className="row ">
        <div className="card col-md-5 text-center">
          <div className="">
            <h2 className="card-title  text-center mb-4">My Post</h2>
            <div className="container borederd">
              <table className="table table-striped text-center">
                <tbody>
                  {mydata.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.post}</td>
                      <br />
                      <td>Date: {emp.date}</td>
                      <br />
                      <td>Created: {emp.userId === id ? "Own" : "Guest"}</td>
                      <br />
                      <td>{emp.moNo}</td>
                      <br />
                      <td>
                        <button
                          className="btn btn-secondary btn-sm text-center"
                          onClick={() => updateEmployee(emp.id)}
                        >
                          Update
                        </button>
                      </td>
                      <br />
                      <td>
                        <button
                          className="btn btn-info"
                          onClick={() => deleteEmployee(emp.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_My_Post;
