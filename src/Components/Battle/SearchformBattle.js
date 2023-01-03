import React, { useState, useEffect } from "react";
import { searchNameToBattle } from "../../store/index.js";
import { useDispatch } from "react-redux";

function SearchformBattle() {
  const dispatch = useDispatch();

  const [searchInputValue, setSearchInputValue] = useState("");

  const input = document.getElementById("search-input-battle");

  const handleSearch = (event) => {
    if (searchInputValue === "") {
      return;
    } else {
      event.preventDefault();
      dispatch(searchNameToBattle(searchInputValue));
      setSearchInputValue("");
      input.value = "";
    }
  };

  // Clearing search after navigating to homepage
  useEffect(() => {
    if (window.location.pathname === "/") {
      dispatch(searchNameToBattle(""));
    }
  });

  return (
    <form className="searchform cf">
      <input
        className="searchform__input"
        id="search-input-battle"
        onChange={(event) => setSearchInputValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
        type="text"
        name="search-landing"
        placeholder="type hero to add"
        required
      />
      <button
        className="searchform__button"
        onClick={(event) => handleSearch(event)}
      >
        Find Hero
      </button>
    </form>
  );
}

export default SearchformBattle;
