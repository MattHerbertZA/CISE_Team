import React, { useMemo } from "react";
import { useTable } from "react-table";
import DATA from "./DATA.json"; //how to get from db????
import { COLUMNS } from "./columns";
import "./table.css";
import "../App.css";
import { Link } from "react-router-dom";

export const Table = () => {
  //added props here

  const columns = useMemo(() => COLUMNS, []);
  //const article = props.article;
  const data = useMemo(() => DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="Table">
      <div className="container">
        <div className="dropDown">
          <div className="sePractice">
            SE Practice <br></br>
            <select name="dropDownSE" id="dropDown">
                <option value="TDD">TDD</option> {" "}
              <option value="For Testing">Testing</option> 
              <option value="all">All</option>
            </select>
          </div>
        </div>
        <table className="table table-hover table-dark" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {" "}
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
