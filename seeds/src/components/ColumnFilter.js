import React from 'react'

export const ColumnFilter = ({ column }) => {
 const { setFilter } = column
 
    return (
        <span>
            SE Practice <br></br>
      <select name="dropDownSE" id="dropDown">
          <option value="TDD">TDD</option> {" "}
        <option value="For Testing">Testing</option>
        <option value="all">All</option>
      </select>
      onChange={(e) => setFilter(e.target.value)}
        </span>
    )
}