// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Navbar } from './Navbar';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { UserLists } from './UserLists';
import { Welcome } from './Welcome';
import { Lists } from './Lists';
import { EditUser } from './EditUser';
import { EditContent } from './EditContent';
import { EditProfileUsers } from './EditUsers';

function App() {
  //Initiating the users lists
  const [finalList, setList] = useState(Lists);
  const deleteUser = id => {
    setList(finalList.filter(user => user.Id_no !== id));
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='bg-dark text-white rounded-2 p-3'>
          <Navbar />
        </div>
        <div className='bg-light'>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/users" element={<UserLists value={finalList} viewuser={ViewUser} />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/profile/:id" element={<ViewUser />} />
            <Route path="/edit-user/" element={<EditUser value={finalList} deleteContent={deleteUser} />} />
            <Route path="/edit-profile/" element={<EditProfile />} />
            <Route path="/edit-profile/:indices" element={<ProfileOptions />} />
          </Routes>
        </div>
      </div>
    </div>
  );
  function ProfileOptions() {
    const { indices } = useParams();
    const returning = useNavigate();
    return (
      <div className='text-center mt-3'>
        <div className='gap-2 p-3'>Delete Options DISABLED for USER Id number : <b>{indices}</b> </div>
        <div>
          <button className='btn btn-outline-dark' onClick={() => returning("/edit-profile")}>Go Back</button>
        </div>
      </div>
    )
  }
  function EditProfile() {

    return (
      <div className='Template'>
        <EditContent />
        <EditProfileUsers value={finalList} />
      </div>
    );
  }
  function ViewUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    let url = "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png";
    return (
      <div className='text-center bg-light p-3'>
        <button className='btn btn-outline-dark ' onClick={() => navigate("/users")}>Go back</button>
        <div className='container gap-2 fs-5 p-3'>
          <div className='d-flex column justify-content-between align-items-center'>
            <div>
              <label>User's ID number :</label>
              <span>{id}</span>
            </div>
            <div className='img-thumbnail rounded-circle'>
              <img src={url} alt={"Profilepic"} width={"100rem"} height={"100rem"} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  function CreateUser() {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [place, setPlace] = useState("");
    const [country, setCountry] = useState("");
    return (
      <div className="Create-user bg-lighter rounded-2 mx-auto d-flex flex-column justify-content-start align-items-center">
        <div className='fs-3 p-3'>Create a new User</div>
        <div className=''>
          <form className="d-flex flex-column justify-content-center">
            <div className="p-3 d-flex flex-row align-items-center gap-2">
              <label className="col-5 form-label">Enter your ID</label>
              <div className="col-6">
                <input className="form-control " type="text" onChange={(event) => { setId(event.target.value) }} />
              </div>
            </div>
            <div className="p-3 d-flex flex-row align-items-center gap-2">
              <label className="col-5 form-label">Enter your name</label>
              <div className="col-6">
                <input className="form-control " type="text" onChange={(event) => { setName(event.target.value) }} />
              </div>
            </div>
            <div className="p-3 d-flex flex-row align-items-center gap-2">
              <label className="col-5 form-label">Enter your Place</label>
              <div className="col-6">
                <input className="form-control " type="text" onChange={(event) => { setPlace(event.target.value) }} />
              </div>
            </div>
            <div className="p-3 d-flex flex-row align-items-center gap-2">
              <label className="col-5 form-label">Enter your Country</label>
              <div className="col-6">
                <input className="form-control " type="text" onChange={(event) => { setCountry(event.target.value) }} />
              </div>
            </div>
            <div className="p-3 col-12 d-flex flex-row justify-content-center align-items-center">
              <button className="btn btn-outline-dark btn-light" onClick={() => {
                let newUser = {
                  Id_no: id,
                  name: name,
                  place: place,
                  country: country
                };
                setList([...Lists, newUser]);
              }}>
                Add user
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
