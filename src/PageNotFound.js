import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

function PageNotFound() {
  const flag = useNavigate();
  let url =
    "https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif";
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center gap-3 m-3 p-3 container">
        <div>
          <img src={url} alt={"404Error"} width={"900px"} height={"600px"} />
        </div>
        <Link to="/">
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => flag("/")}
          >
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
