import React from "react";
//import "./SearchBar.css";

export default function SearchBar() {
  return (
    <form id="search-form">
      <input type="text" placeholder="Insert city" id="search-input" />
      <input type="submit" value="Search" />
      <button class="reset-btn" id="reset-btn">
        Current
      </button>
    </form>
  );
}
