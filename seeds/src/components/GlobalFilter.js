import React from "react";




export const GlobalFilter = ({ filter, setFilter }) => {
  
  function setDate(year){
    if(year === "10"){
      var dateArray = "ten"//["2021","2020","2019","2018","2017","2016","2015","2014","2013","2012"]
    }
    if(year === "5"){
      var dateArray = ["2021","2020","2019","2018","2017"]
    }
    if(year === "2"){
      var dateArray = ["2021","2020","2019"]
    }
    if(year === "1"){
      var dateArray = "20"
    }

    alert("value is "+dateArray)
  
    setFilter(dateArray)
  }

  
  

  return (
    <span>
      Search by date:
      <select
        id="dateDropdown"
        name="dateDropdown"
        onChange={(e) => (setDate(e.target.value))}
      >
        <option value="">All</option>
        <option value="10">Last 10 years</option>
        <option value="5">Last 5 years</option>
        <option value="2">Last 2 years</option>
        <option value="1">Last year</option>
      </select>

        

    </span>
  );
};
