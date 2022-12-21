import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Searchform() {
  const [searchInputValue, setSearchInputValue] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInputValue === "") {
      return;
    } else {
      navigate(`/search/${searchInputValue}`);
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
