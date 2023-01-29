import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "./BasicData";

export default function CreateList() {
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  useEffect(() => {
    fetch(`${URL}/students`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setArr(result);
      });
  }, []);
  return (
    <tbody>
      {arr.map((element, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>

            <td>{element.name}</td>
            <td>{element.place}</td>
           <td>{element.country}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
