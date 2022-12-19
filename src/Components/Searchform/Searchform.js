import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchform.css";

function Searchform() {
  const [searchInputValue, setSearchInputValue] = useState("");

  const navigate = useNavigate();

  const input = document.getElementById("search-input-landing");
  const inputCleanup = () => {
    input.value = "";
  };

  const handleSearch = () => {
    if (searchInputValue === "") {
      return;
    } else {
      navigate(`/search/${searchInputValue}`);
      inputCleanup();
    }
  };

  return (
    <form className="landing__searchform searchform cf">
      <input
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
      <button onClick={handleSearch}>Find Hero</button>
    </form>
  );
}

export default Searchform;
