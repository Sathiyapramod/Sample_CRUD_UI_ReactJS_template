import React, { useEffect, useState } from "react";
import { URL } from "./BasicData";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


function Edit() {
  const [input, setInput] = useState([]);
  const navigate = useNavigate();
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
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {input.map((element, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.place}</td>
              <td>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    alert("Are you Sure want to delete ???")
                    fetch(`${URL}/students/${element.id}`, {
                      method: "DELETE",
                    }).then(() => getdetails());
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <Button
                  onClick={() => {
                    navigate(`/users/edit/${element.id}`);
                  }}
                >
                  <EditIcon />
                </Button>
              </td>
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
