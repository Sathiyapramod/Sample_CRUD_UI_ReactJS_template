import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { URL } from "./BasicData";

function DetailsEdit() {
  const { id } = useParams();
  const [arr, setArr] = useState(null);
  
  useEffect(() => {
    fetch(`${URL}/students/${id}`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setArr(result);
      });
  }, [id] );

  return (arr ? <EditForm arr={arr} /> :  "Loading ....");
}

function EditForm({arr}) {
  const navigate = useNavigate();
  const [name, setName] = useState(arr.name);
  const [Id, setId] = useState(arr.id);
  const [place, setPlace] = useState(arr.place);
  const [country, setCountry] = useState(arr.country);
  return (
    <div className="add-book-form">
      <div className="fs-2">Edit Details </div>
      <div className="d-flex flex-column gap-2">
        <TextField
          value={name}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          value={Id}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(event) => setId(event.target.value)}
        />
        <TextField
          value={place}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(event) => setPlace(event.target.value)}
        />
        <TextField
          value={country}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(event) => setCountry(event.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            const userEdit = {
              name: name,
              id: Id,
              place: place,
              country: country,
            };
            fetch(`${URL}/students/${arr.id}`, {
              method: "PUT",
              body: JSON.stringify(userEdit),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((data) => data.json())
              .then(()=>alert("Data Successfully Updated !"))
              .then(() => navigate("/users"));
          }}
        >
          SAVE
        </Button>
      </div>
    </div>
  );
}

export default DetailsEdit;
