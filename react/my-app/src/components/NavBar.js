import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.firstcolmn}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
          </ul>
          
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" style={{height: "20px", width: "20px", cursor:"pointer"}}>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = { title: PropTypes.string.isRequired, firstcolmn: PropTypes.string.isRequired };
// NavBar.defaultProps = {title : 'Title here', firstcolmn : "first here"};  //to use default...
