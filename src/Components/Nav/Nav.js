import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade.js";
import { useDispatch, useSelector } from "react-redux";
import { searchNameToBattle } from "../../store/index.js";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import useShowUpOnOffsetInPath from "../../hooks/useShowUpOnOffsetInPath.js";
import NavButton from "./NavButton.js";
import NavSearchform from "./NavSearchForm.js";

function Nav() {
  const isvisible = useShowUpOnOffsetInPath(500, "/");

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

  return (
    <Fade>
      <nav className={isvisible ? "nav" : "nav-display-none"}>
        <div className="container nav__container">
          {enableSearch && (
            <>
              <div className="nav__buttons">
                <NavButton buttonText={"HOME"} toId={"landing"} />
                <NavButton buttonText={"FEATURED"} toId={"featured"} />
                <NavButton buttonText={"BATTLE"} toId={"battle"} />
              </div>
              <div className="nav__search">
                <NavSearchform />
              </div>
            </>
          )}
          {!enableSearch && (
            <div className="nav__buttons">
              <NavButton buttonText={"HOME"} toId={"landing"} />
              <NavButton buttonText={"FEATURED"} toId={"featured"} />
              {/* <HashLink className="nav__button-home" spy smooth to="/#landing">
                <span onClick={() => dispatch(searchNameToBattle(""))}>
                  HOME
                </span>
              </HashLink>
              <HashLink className="nav__button-home" spy smooth to="/#featured">
                <span onClick={() => dispatch(searchNameToBattle(""))}>
                  FEATURED
                </span>
              </HashLink> */}
            </div>
          )}
        </div>
      </nav>
    </Fade>
  );
}

export default Nav;
