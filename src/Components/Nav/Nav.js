import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade.js";
import logo from "../../assets/img/nav_logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchNameToBattle, store } from "../../store/index.js";
import { Link, animateScroll as scroll } from "react-scroll";

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

  const searchedNameToBattle = useSelector((state) => {
    return state.searchedNameToBattle[0];
  });

  useEffect(() => {
    if (window.location.pathname === "/battle" || searchedNameToBattle !== "") {
      setEnableSearch(false);
    } else {
      setEnableSearch(true);
    }
    // eslint-disable-next-line
  }, [window.location.pathname]);

  const dispatch = useDispatch();
  const handleHome = () => {
    dispatch(searchNameToBattle(""));
    navigate("/#landing");
  };
  const handleFeatured = () => {
    dispatch(searchNameToBattle(""));
    navigate("/#featured");
  };

  return (
    <Fade>
      <nav className={isvisible ? "nav" : "nav-display-none"}>
        <div className="container nav__container">
          {/* <img
            className="nav__logo"
            onClick={handleHome}
            src={logo}
            alt="Superhero Database"
          /> */}
          <div className="nav__buttons">
            <Link
              activeClass="active"
              to="landing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              HOME
            </Link>
            <Link
              activeClass="active"
              to="featured"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              FEATURED
            </Link>
            <Link
              activeClass="active"
              to="battle"
              spy={true}
              smooth={true}
              offset={20}
              duration={1000}
            >
              BATTLE
            </Link>
          </div>
          {/* <div className="nav__buttons">
            <a href="#landing" className="nav__button-home">
              HOME
            </a>
            <a href="#featured" className="nav__button-home">
              FEATURED
            </a>
            <a href="#battle" className="nav__button-home">
              BATTLE
            </a>
          </div> */}
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
                  placeholder=" Type hero name"
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
              <button onClick={handleHome} className="nav__button-home">
                HOME
              </button>
              <button onClick={handleFeatured} className="nav__button-home">
                FEATURED
              </button>
            </div>
          )}
        </div>
      </nav>
    </Fade>
  );
}

export default Nav;
