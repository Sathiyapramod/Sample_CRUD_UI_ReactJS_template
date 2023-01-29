import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";

export function Navbar() {
  const styling = {
    border: "1px",
    listStyleType: "none",
    color: "white",
    textDecoration: "none",
  };
  return (
    <AppBar position="static">
      <div className="d-flex flex-row justify-content-between align-items-center p-3">
        <div>
          <span className="fw-bold fs-2 lh-1"> 😊Welcome 😊</span>
        </div>
        <div>
          <ul className="d-flex flex-row gap-4 align-items-center">
            <li>
              <Link to="/" style={styling}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/users" style={styling}>
                List of Users
              </Link>
            </li>
            <li>
              <Link to="/edit" style={styling}>
                Edit User
              </Link>
            </li>
            <li>
              <Link to="/create" style={styling}>
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </AppBar>
  );
}
