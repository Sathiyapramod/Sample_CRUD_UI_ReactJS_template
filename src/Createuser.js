import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "./BasicData";
import { useFormik } from "formik";
import * as yup from 'yup';

import Button from "@mui/material/Button";

function Createuser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
 
  const formValidationSchema = yup.object({
    name: yup.string().min(3,"Enter valid Name").required("Why this space left ?"),
    id: yup.number().min(3,"Enter a valid number").required("Why this space left blank"),
    place: yup.string().min(4,"Enter valid Location").required("Why this space left ?"),
    country: yup.string().min(4,"Enter valid Input").required("Why this space left ?")
  })  

  const formik = useFormik({
    validationSchema: formValidationSchema,
    onSubmit: (value)=> {console.log(value)},
  })

  return (
    <div className="Create-user bg-lighter rounded-2 mx-auto d-flex flex-column justify-content-start align-items-center">
      <div className="fs-3 p-3">Create a new User</div>
      <div className="">
        <form className="d-flex flex-column justify-content-center" onSubmit={formik.handleSubmit} >
          <div className="p-3 d-flex flex-row align-items-center gap-2">
            <label className="col-5 form-label">Enter your ID</label>
            <div className="col-6">
              <input
                className="form-control "
                type="text"
                id="name"
                onChange={(event) => {
                  setId(event.target.value);
                }}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="p-3 d-flex flex-row align-items-center gap-2">
            <label className="col-5 form-label">Enter your name</label>
            <div className="col-6">
              <input
                className="form-control "
                type="text"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="p-3 d-flex flex-row align-items-center gap-2">
            <label className="col-5 form-label">Enter your Place</label>
            <div className="col-6">
              <input
                className="form-control "
                type="text"
                onChange={(event) => {
                  setPlace(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="p-3 d-flex flex-row align-items-center gap-2">
            <label className="col-5 form-label">Enter your Country</label>
            <div className="col-6">
              <input
                className="form-control "
                type="text"
                onChange={(event) => {
                  setCountry(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="p-3 col-12 d-flex flex-row justify-content-center align-items-center">
            <Button
              variant="contained"
              type="submit"
              onClick={() => {
                const newUser = {
                  name: name,
                  id: id,
                  place: place,
                  country: country,
                };

                fetch(`${URL}/students`, {
                  method: "POST",
                  body: JSON.stringify(newUser),
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((data) => data.json())
                  .then(() => {
                    alert("User added successfully");
                    navigate("/users");
                  });
              }}
            >
              Add Book
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Createuser;
