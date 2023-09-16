import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("Dashboard component", () => {
  it("renders without crashing", () => {
    render(<Dashboard />);
  });

  it("displays a table with data", () => {
    const { getByText } = render(<Dashboard />);

    const table = getByText("Tabla de Datos");
    expect(table).toBeInTheDocument();

    const fileNameHeader = getByText("File Name");
    const textHeader = getByText("Text");
    const numberHeader = getByText("Number");
    const hexHeader = getByText("Hex");

    expect(fileNameHeader).toBeInTheDocument();
    expect(textHeader).toBeInTheDocument();
    expect(numberHeader).toBeInTheDocument();
    expect(hexHeader).toBeInTheDocument();
  });

  it("filters data by fileName", () => {
    const { getByPlaceholderText, getByText } = render(<Dashboard />);

    const filterInput = getByPlaceholderText("Filtrar por fileName");
    fireEvent.change(filterInput, { target: { value: "test2.csv" } });

    expect(getByText("test2.csv")).toBeInTheDocument();
    expect(queryByText("test1.csv")).toBeNull();
  });
});
