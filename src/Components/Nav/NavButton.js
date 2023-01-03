import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";

function NavButton({ buttonText, goToId }) {
  return (
    <Link
      activeClass="active"
      to={goToId}
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
    >
      <HashLink className="nav__button-home" spy smooth to={`/#${goToId}`}>
        {buttonText}
      </HashLink>
    </Link>
  );
}

export default NavButton;
