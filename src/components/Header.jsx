import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className=" ">
      <form className="container search-form" id="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          className="col-9 search-form-input "
          id="search-form-input"
          autoFocus="on"
          required
        />
        <input
          type="submit"
          value="Search"
          className="col-2 search-form-button"
        />
      </form>
    </header>
  );
}
