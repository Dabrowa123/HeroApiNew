import React, { useState, useEffect } from "react";
import useSearch from "../../hooks/useSearch.js";
import { searchNameToBattle } from "../../store/index.js";
import { useDispatch } from "react-redux";

function SearchformBattle() {
  const [handleChange, handleSubmit] = useSearch("search-input-battle");
  const dispatch = useDispatch();

  // const [searchInputValue, setSearchInputValue] = useState("");

  // const input = document.getElementById("search-input-battle");

  // const handleSearch = (event) => {
  //   if (searchInputValue === "") {
  //     return;
  //   } else {
  //     event.preventDefault();
  //     dispatch(searchNameToBattle(searchInputValue));
  //     setSearchInputValue("");
  //     input.value = "";
  //   }
  // };

  // Clearing search after navigating to homepage
  useEffect(() => {
    if (window.location.pathname === "/") {
      dispatch(searchNameToBattle(""));
    }
  });

  return (
    <form className="searchform cf" onSubmit={handleSubmit}>
      <input
        className="searchform__input"
        id="search-input-battle"
        onChange={handleChange}
        // onKeyDown={(event) => {
        //   if (event.key === "Enter") {
        //     handleSearch();
        //   }
        // }}
        type="text"
        name="search-landing"
        placeholder="type hero to add"
        required
      />
      <button className="searchform__button">Find Hero</button>
      {/* <button
        className="searchform__button"
        onClick={(event) => handleSearch(event)}
      >
        Find Hero
      </button> */}
    </form>
  );
}

export default SearchformBattle;
