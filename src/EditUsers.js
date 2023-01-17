import { EditAction } from "./EditAction";

export function EditProfileUsers({value,editRow}){
    return (
        <div className="container bg-light mt-3">
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
            <EditAction value={value} editRow={editRow}/>
        </table> :  <table className="table table-striped">
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
    );
}