import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";

function NavButton({ buttonText, toId }) {
  return (
    <Link
      activeClass="active"
      to={toId}
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
    >
      <HashLink className="nav__button-home" spy smooth to={`/#${toId}`}>
        {buttonText}
      </HashLink>
    </Link>
  );
}

export default NavButton;
