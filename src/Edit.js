import React, { useEffect, useState } from "react";
import { URL } from "./BasicData";

function Edit() {
  const [input, setInput] = useState([]);
  const getdetails = () => {
    fetch(`${URL}/students`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setInput(data));
  };

  useEffect(() => getdetails(), []);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Id no.</th>
            <th>Name</th>
            <th>Place</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {input.map((element,index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.place}</td>
              <td><button className="btn btn-outline-primary" onClick={()=>{
                fetch(`${URL}/students/${element.id}`, {method: "DELETE"})
                .then(()=>getdetails());
              }}>
                Delete
              </button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="text-start p-3">
        Alert !! Delete Options triggered using API calls.. 
      </footer>
    </div>
  );
}

export default Edit;
