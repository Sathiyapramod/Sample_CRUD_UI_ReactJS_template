export function EditContent() {
  return (
    <div>
      <div className="fs-1 text-center p-3">Edit Profile</div>
      <div className="d-flex flex-row justify-content-center">
        <form className="d-flex flex-column justify-content-center">
          <div className="p-3 d-flex flex-row align-items-center">
            <label className="col-5 form-label">ID</label>
            <div className="col-6">
              <input className="form-control " type="text" />
            </div>
          </div>
          <div className="p-3 d-flex flex-row align-items-center">
            <label className="col-5 form-label">Name</label>
            <div className="col-6">
              <input className="form-control " type="text" />
            </div>
          </div>
          <div className="p-3 d-flex flex-row align-items-center">
            <label className="col-5 form-label">Place</label>
            <div className="col-6">
              <input className="form-control " type="text" />
            </div>
          </div>
          <div className="p-3 d-flex flex-row align-items-center">
            <label className="col-5 form-label">Country</label>
            <div className="col-6">
              <input className="form-control " type="text" />
            </div>
          </div>
          <div className="p-3 col-12 d-flex flex-row justify-content-center align-items-center">
            <button className="btn btn-outline-dark btn-light" >
              Save Profile
            </button>
          </div>
        </form>
      </div>
      <hr class="border border-dark border-1 opacity-25"></hr>
    </div>
  );
}