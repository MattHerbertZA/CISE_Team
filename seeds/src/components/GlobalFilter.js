import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
        Search:{' '}
        SE Practice <br></br>
      <select name="dropDownSE" id="dropDown" onChange={(e) => setFilter(e.target.value)}>
          <option value="TDD">TDD</option> {" "}
        <option value="For Testing">Testing</option>
      </select>
    </span>
  );
};
