import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavSearchform() {
  // Adding search logic
  const [searchInputValue, setSearchInputValue] = useState("");

  const navigate = useNavigate();

  const input = document.getElementById("search-input");

  const handleSearch = (event) => {
    if (searchInputValue === "") {
      return;
    } else {
      event.preventDefault();
      navigate(`/search/${searchInputValue}`);
      setSearchInputValue("");
      input.value = "";
    }
  };
  return (
    <form>
      <input
        id="search-input"
        onChange={(event) => setSearchInputValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch(event);
          }
        }}
        type="text"
        name="search-nav"
        placeholder=" Type hero name"
        required
      />
      <button onClick={(event) => handleSearch(event)}>find hero!</button>
    </form>
  );
}

export default NavSearchform;
