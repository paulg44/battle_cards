import "../../assets/css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to={"/"} className="logo" id="logo">
        Horror Battle
      </Link>
      <div className="navbarInfo">
        <ul>
          <li>Username</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
