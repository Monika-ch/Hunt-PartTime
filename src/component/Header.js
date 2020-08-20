import React from "react";
import { Navbar } from "reactstrap";
import Login from "./Login";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <React.Fragment>
      <Navbar sticky="top" className="m-0 p-0">
        <div className="container-fluid navbar">
          <div className="Hunt col-1">
            <h1>
              <Link to="/home" className="hunt-link">
                Hunt
              </Link>
            </h1>
            <h4>Part-Time</h4>
          </div>

          <span
            className=" Nav-sign-in ml-auto btn btn-outline-info"
            onClick={props.toggleLoginModal}
          >
            Sign in
          </span>

          <Login
            loginModal={props.loginModal}
            registerModal={props.registerModal}
            toggleLoginModal={props.toggleLoginModal}
            toggleRegisterModal={props.toggleRegisterModal}
          />
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
