import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/img/nav_logo.png";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [searchInputValue, setSearchInputValue] = useState("");

  const navigate = useNavigate();
  const inputCleanup = () => {document.getElementById("search-input").value = ""};

  return (
    <nav className="nav">
      <div className="container">
        <Link to="/">
          <img className="nav__logo" src={logo} alt="Superhero Database" />
        </Link>
        <div className="nav__search">
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
          />
          <Link to={`/search/${searchInputValue}`}>
            <button onClick={inputCleanup}>find hero!</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
