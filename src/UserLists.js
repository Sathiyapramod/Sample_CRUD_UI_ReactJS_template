import CreateList from "./CreateList";

export function UserLists() {
  return (
    <div className="User-list container bg-lighter mt-3">
      <h1>Users Lists </h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Place</th>
            <th>Actions</th>
          </tr>
        </thead>
        <CreateList />
      </table>
    </div>
  );
}
