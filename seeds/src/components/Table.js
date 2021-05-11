import React, { useMemo } from "react";
import { useTable } from "react-table";
import DATA from "./DATA.json"; //how to get from db
import { COLUMNS } from "./columns";
import './table.css'
import { Link } from 'react-router-dom';


export const Table = (props) => { //added props here
  const columns = useMemo(() => COLUMNS, []);
  const article = props.article;
  const data =  article//useMemo(() => DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
                headerGroup.headers.map( (column) => (
                    <th {...column.getHeaderGroupProps()}> {column.render('Header')}</th>
                ))
            }
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
          {
              rows.map(row => {
                  prepareRow(row)
                  return (
        <tr {...row.getRowProps()}>{
            row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>

            })
        }
        </tr>

                  )
              })
          }
      </tbody>
    </table>
  );
};
