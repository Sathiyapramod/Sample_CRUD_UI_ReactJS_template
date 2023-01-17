
import { CreateList } from './CreateList';

export function UserLists({ value }) {
    return (
        <div className="User-list container bg-lighter mt-3">
        <h1>Users Lists </h1>
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
                <CreateList value={value} />
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
    )
}


