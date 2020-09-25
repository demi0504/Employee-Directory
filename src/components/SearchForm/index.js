import React from "react";

function SearchInput({ handleOnChange, results }) {
  return (
    <form className="search">
      <input 
      className="form-control" 
      placeholder="Enter Employee Name Here"
      onChange={(event) => handleOnChange(event)}
      ></input>
      <button type="submit" className="btn btn-success">Search</button>
    </form>
  );
}

export default SearchInput;