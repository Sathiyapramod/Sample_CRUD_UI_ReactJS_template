import { Link,  } from "react-router-dom";

export function EditAction({value,editRow}){
    
    return (
        <tbody>
        {value.map((element, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{element.Id_no}</td>
                    <td>{element.name}</td>
                    <td>{element.place}</td>
                    <td><Link to={"/edit-profile/"+element.Id_no}><button className='btn btn-outline-dark btn-light'>Edit Profile</button></Link></td>
                </tr>
            )
        })
        }
    </tbody>
    );
}