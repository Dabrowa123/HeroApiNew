import React from "react";
import Fade from "react-reveal/Fade.js";
import useShowUpOnOffsetInPath from "../../hooks/useShowUpOnOffsetInPath.js";
import useBattleMode from "../../hooks/useBattleMode.js";
import NavButton from "./NavButton.js";
import Searchform from "../UI/Searchform/Searchform.js";

function Nav() {
  const isvisible = useShowUpOnOffsetInPath(500, "/");
  const [battleMode, disableBattleMode] = useBattleMode();

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
              <NavButton
                buttonText={"HOME"}
                goToId={"landing"}
                onClick={disableBattleMode}
              />
              <NavButton
                buttonText={"FEATURED"}
                goToId={"featured"}
                onClick={disableBattleMode}
              />
            </div>
          )}
        </div>
      </nav>
    </Fade>
  );
}

export default Nav;
