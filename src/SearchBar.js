import React from "react";
//import "./SearchBar.css";

export default function SearchBar() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Insert city" id="search-input" />
      <input type="submit" value="Search" onChange={handleCityChange} />
      <button className="reset-btn" id="reset-btn">
        Current
      </button>
    </form>
  );
}
