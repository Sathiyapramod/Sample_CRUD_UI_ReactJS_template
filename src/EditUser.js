import { EditList } from "./EditList"
import { useParams } from "react-router-dom";

export function EditUser({ value, deleteContent }) {
    const { userId } = useParams();
    console.log(userId);
    return (
        <div className="Template container bg-light mt-3">
            <h1>Edit Users </h1>
            {(value.length > 0) ? <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id Card no.</th>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <EditList value={value} deleteUser={deleteContent} />
            </table> : <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id Card no.</th>
                        <th>Name</th>
                        <th>Place</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={4}>No Users</td>
                    </tr>
                </tbody>
            </table>}
        </div>
    )
}


