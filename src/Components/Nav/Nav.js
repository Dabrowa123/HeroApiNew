import React from "react";
import Fade from "react-reveal/Fade.js";
import useShowUpOnOffsetInPath from "../../hooks/useShowUpOnOffsetInPath.js";
import NavButton from "../UI/Buttons/NavButton.js";
import Searchform from "../UI/Searchform/Searchform.js";
import { useSelector } from "react-redux";

function Nav() {
  const isvisible = useShowUpOnOffsetInPath(500, "/");
  const battleMode = useSelector((state) => {
    return state.battleMode[0];
  });

  return (
    <Fade>
      <nav className={isvisible ? "nav" : "nav-display-none"}>
        <div className="container nav__container">
          {!battleMode && (
            <>
              <div className="nav__buttons">
                <NavButton buttonText={"HOME"} goToId={"landing"} />
                <NavButton buttonText={"FEATURED"} goToId={"featured"} />
                <NavButton buttonText={"BATTLE"} goToId={"battle"} />
              </div>
              <div className="nav__search">
                <Searchform formId="search-input-landing" classBlockName="" />
              </div>
            </>
          )}
          {battleMode && (
            <div className="nav__buttons">
              <NavButton buttonText={"HOME"} goToId={"landing"} />
              <NavButton buttonText={"FEATURED"} goToId={"featured"} />
            </div>
          )}
        </div>
      </nav>
    </Fade>
  );
}

export default Nav;
