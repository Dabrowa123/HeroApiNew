import React from "react";
import Fade from "react-reveal/Fade.js";
import useShowUpOnOffsetInPath from "../../hooks/useShowUpOnOffsetInPath.js";
import useBattleMode from "../../hooks/useBattleMode.js";
import NavButton from "./NavButton.js";
import NavSearchform from "./NavSearchForm.js";

function Nav() {
  const isvisible = useShowUpOnOffsetInPath(500, "/");
  const battleMode = useBattleMode();

  return (
    <Fade>
      <nav className={isvisible ? "nav" : "nav-display-none"}>
        <div className="container nav__container">
          {!battleMode && (
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
          {battleMode && (
            <div className="nav__buttons">
              <NavButton buttonText={"HOME"} toId={"landing"} />
              <NavButton buttonText={"FEATURED"} toId={"featured"} />
            </div>
          )}
        </div>
      </nav>
    </Fade>
  );
}

export default Nav;
