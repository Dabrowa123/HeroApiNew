import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { turnOffBattleMode } from "../../../store/index.js";

function NavButton({ buttonText, goToId }) {
  const dispatch = useDispatch();

  return (
    <Link
      activeClass="active"
      to={goToId}
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
    >
      <HashLink
        className="nav__button-home"
        spy
        smooth
        to={`/#${goToId}`}
        onClick={() => dispatch(turnOffBattleMode())}
      >
        {buttonText}
      </HashLink>
    </Link>
  );
}

export default NavButton;
