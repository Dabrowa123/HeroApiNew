import React, { useState } from "react";
import { searchNameToBattle, store } from "../../store/index.js";
import { useDispatch } from "react-redux";

function SearchformBattle() {
  const dispatch = useDispatch();

  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSearch = (event) => {
    if (searchInputValue === "") {
      return;
    } else {
      event.preventDefault();
      dispatch(searchNameToBattle(searchInputValue));
    }
  };

  return (
    <form className="searchform cf">
      <input
        className="searchform__input"
        id="search-input-landing"
        onChange={(event) => setSearchInputValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
        type="text"
        name="search-landing"
        placeholder="type hero name"
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
