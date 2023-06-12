import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../config/Firebase";

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

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
          {user ? (
            <Link to="/dashboard" className="nav-element">
              <p>Dashboard</p>
            </Link>
          ) : null}
          {user ? (
            <Link to="/projects" className="nav-element">
              <p>Projects</p>
            </Link>
          ) : null}
          <Link to="/about" className="nav-element">
            <p>About</p>
          </Link>
          {user ? (
            <Link to="/profile" className="nav-element">
              <p>Profile</p>
            </Link>
          ) : null}
          <Link to={!user && "/login"} className="nav-element">
            <div onClick={handleAuthenticaton} className="signin_but">
              <p>{user ? "Sign Out" : "Sign In"}</p>
            </div>
          </Link>
          <div className="nav-element"></div>
        </div>
      </div>
    </div>
  );
}
