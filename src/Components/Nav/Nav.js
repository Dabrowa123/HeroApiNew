import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade.js";
import logo from "../../assets/img/nav_logo.png";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  // Adding sticky nav logic
  const [isvisible, setIsVisible] = useState(false);
  const offsetReached = () => {
    if (window.location.pathname !== "/") {
      setIsVisible(true);
    } else {
      if (window.scrollY >= 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };
  window.addEventListener("scroll", offsetReached);
  useEffect(() => {
    offsetReached();
    // eslint-disable-next-line
  }, [window.location.pathname]);

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

  // Display searchform
  const [enableSearch, setEnableSearch] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/battle") {
      setEnableSearch(false);
    } else {
      setEnableSearch(true);
    }
    // eslint-disable-next-line
  }, [window.location.pathname]);

  return (
    <Fade>
      <nav className={isvisible ? "nav" : "nav-display-none"}>
        <div className="container nav__container">
          <Link to="/">
            <img className="nav__logo" src={logo} alt="Superhero Database" />
          </Link>
          {enableSearch && (
            <div className="nav__search">
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
                  placeholder=" type hero name"
                  required
                />
                <button onClick={(event) => handleSearch(event)}>
                  find hero!
                </button>
              </form>
            </div>
          )}
          {!enableSearch && (
            <div className="nav__buttons">
              <Link to="/"><button className="nav__button-home">HOME</button></Link>
            </div>
          )}
        </div>
      </nav>
    </Fade>
  );
}

export default Nav;
