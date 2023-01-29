export function MakeEditList({ key }) {
  return (
    <tbody>
      <tr>
        <td>{key.id}</td>
        <td>{key.Name}</td>
        <td>{key.Place}</td>
      </tr>
    </tbody>
  );
}
