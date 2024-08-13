import "../../assets/css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to={"/"} className="logo" id="logo">
        Horror Battle
      </Link>
    </nav>
  );
}

export default Navbar;
