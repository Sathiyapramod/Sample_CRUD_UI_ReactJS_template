// import logo from './logo.svg';
import "./App.css";
import { Navbar } from "./Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
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
  
  }

export default App;
