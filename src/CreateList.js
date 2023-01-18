import { Link, useNavigate } from 'react-router-dom';

export function CreateList({ finalList }) {
    const navigate = useNavigate();
    return (
        <tbody>
            {finalList.map((element, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{element.Id_no}</td>
                        <td>{element.name}</td>
                        <td>{element.place}</td>
                        <td><Link to={"/profile/" + index}><button className='btn btn-outline-dark btn-light' onClick={() => navigate("/profile/" + index)}>View Details</button></Link></td>
                    </tr>
                )
            })
            }
        </tbody>
    );
}