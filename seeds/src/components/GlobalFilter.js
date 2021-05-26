import React from "react";




export const GlobalFilter = ({ filter, setFilter }) => {
  
  //I am honestly so sorry how I have implemented this, I know this is disgusting
    
  return (
    <span>
      Search by date:
      <select
        id="dateDropdown"
        name="dateDropdown"
        onChange={(e) => (setFilter(e.target.value))}
      >
        <option value="">All</option>
        <option value="ten">Last 10 years</option>
        <option value="five">Last 5 years</option>
        <option value="one">Last year</option>
      </select>

        

    </span>
  );
};
