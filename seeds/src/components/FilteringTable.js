import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import DATA from "./DATA.json"; //how to get from db????
import { COLUMNS } from "./columns";
import "./table.css";
import "../App.css";
import { Link } from "react-router-dom";
import { ColumnFilter } from "./ColumnFilter";
import { GlobalFilter } from "./GlobalFilter";

export const FilteringTable = () => {
  //added props here

  const columns = useMemo(() => COLUMNS, []);
  //const article = props.article;
  const data = useMemo(() => DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <div className="Table">
          <h2 className ="display-4 text-center"> SEEDs</h2>
          <div className="dropDown">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
          <table className="table table-hover table-dark" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {" "}
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " ˅"
                            : " ˄"
                          : " "}
                      </span>
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
    </>
  );
};
