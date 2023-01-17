import { Link } from 'react-router-dom';

export function EditList({ value, deleteUser }) {

    return (
        <tbody>
            {value.map((element, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{element.Id_no}</td>
                        <td>{element.name}</td>
                        <td>{element.place}</td>
                        <td><Link to={"/edit-user/"}><button className='btn btn-outline-dark' onClick={()=>deleteUser(element.Id_no)}>Delete</button></Link></td>
                    </tr>
                )
            })
            }
        </tbody>
    );
}