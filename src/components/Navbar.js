import { PropTypes } from "prop-types";
import { useState } from "react";
import About from "./About";
import {Link, link} from 'react-router-dom'
export default function Navbar(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [btnnext, setBtnnext] = useState("Dark Mode");
  // const togglestyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({ color: "black", backgroundColor: "white" });
  //     setBtnnext("Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnnext("Light Mode");
  //   }
  // };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/about">
                About
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
            {/* <input type="checkbox" onClick={togglestyle} className="btn btn-primary">{btnnext}</input> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propType = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Add Title here",
};
