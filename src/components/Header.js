import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/2560px-GitLab_logo.svg.png"
            alt="header_logo"
          />
        </Link>
        <div className={"nav-elements"}>
          <Link to="/" className="nav-element">
            <p>Home</p>
          </Link>

          <Link to="/dashboard" className="nav-element">
            <p>Dashboard</p>
          </Link>

          <Link to="/projects" className="nav-element">
            <p>Projects</p>
          </Link>

          <Link to="/about" className="nav-element">
            <p>About</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
