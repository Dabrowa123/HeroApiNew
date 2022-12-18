import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Searchform.css";

function Searchform() {
  const [searchInputValue, setSearchInputValue] = useState("");

  const navigate = useNavigate();
  const inputCleanup = () => {
    document.getElementById("search-input").value = "";
  };

  return (
    <form className="landing__searchform searchform cf">
      <input
        id="search-input"
        onChange={(event) => setSearchInputValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setSearchInputValue(event.target.value);
            navigate(`/search/${searchInputValue}`);
            inputCleanup();
          }
        }}
        type="text"
        name="search"
        placeholder="type hero name"
      />
      <Link to={`/search/${searchInputValue}`}>
        <button onClick={inputCleanup}>Find Hero</button>
      </Link>
    </form>
  );
}

export default Searchform;
