import React, { useState, useEffect } from "react";
import DataTable from "../components/DataTable";
import { useDispatch } from "react-redux";
import { filesData } from "../redux/actions";
import { FormControl, InputGroup } from "react-bootstrap";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    dispatch(filesData())
      .then((response) => {
        const flattenedData = response.value.flatMap((item) =>
          item.lines.map((line) => ({
            file: item.file,
            ...line,
          }))
        );

        const filteredData = flattenedData.filter(
          (item) =>
            !(
              item.text === "file" &&
              item.number === "number" &&
              item.hex === "text"
            )
        );

        setData(filteredData);
        setOriginalData(filteredData);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  useEffect(() => {
    const filteredData = originalData.filter((item) =>
      item.file.toLowerCase().includes(filter.toLowerCase())
    );

    setData(filteredData);
  }, [filter, originalData]);

  return (
    <div>
      <h1>Tabla de Datos</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Filtrar por fileName"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-pill"
        />
      </InputGroup>
      <DataTable data={data} />
    </div>
  );
};

export default Dashboard;
