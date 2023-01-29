// import logo from './logo.svg';
import "./App.css";
import { Navbar } from "./Navbar";
import { Routes, Route, useParams, useNavigate, Navigate } from "react-router-dom";
import { UserLists } from "./UserLists";
import { Welcome } from "./Welcome";
import Createuser from "./Createuser";
import Edit from "./Edit";
import DetailsEdit from "./DetailsEdit";
import PageNotFound from "./PageNotFound";

function App() {
  //Initiating the users at the parent stage
  // const [finalList, setList] = useState(Lists);
  return (
    <div className="App">
      <div className="container">
        <div className="bg-dark text-white rounded-2">
          <Navbar />
        </div>
        <div className="bg-light">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/users" element={<UserLists />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/create" element={<Createuser />} />
            <Route path="/users/edit/:id" element={<DetailsEdit />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="/*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
  function ProfileOptions() {
    const { indices } = useParams();
    const returning = useNavigate();
    return (
      <div className="text-center mt-3">
        <div className="gap-2 p-3">
          Delete Options DISABLED for USER Id number : <b>{indices}</b>{" "}
        </div>
        <div>
          <button
            className="btn btn-outline-dark"
            onClick={() => returning("/edit-profile")}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  function ViewUser({ finalList }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const user = finalList[id];
    let url =
      "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png";
    return (
      <div className="text-center bg-light p-3">
        <button
          className="btn btn-outline-dark "
          onClick={() => navigate("/users")}
        >
          Go back
        </button>
        <div className="container gap-2 fs-5 p-3">
          <div className="d-flex column justify-content-center align-items-center gap-3">
            <div className="img-thumbnail rounded-circle">
              <img
                src={url}
                alt={"Profilepic"}
                width={"200rem"}
                height={"200rem"}
              />
            </div>
            <div className="details d-flex flex-column text-start fs-4 p-3 shadow m-3">
              <div>Name: {user.name}</div>
              <div>ID : {user.Id_no}</div>
              <div>Place : {user.place}</div>
              <div>Country : {user.country}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
