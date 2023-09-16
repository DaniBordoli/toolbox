import Table from "react-bootstrap/Table";

const DataTable = ({ data }) => {
  return (
    <Table striped bordered hover variant="light" size="sm">
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.file}</td>
            <td>{item.text}</td>
            <td>{item.number}</td>
            <td>{item.hex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
