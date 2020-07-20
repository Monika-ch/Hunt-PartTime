import React from "react";
import {
  Nav,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar sticky="top" expand="sm">
          <div className="container-fluid">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse
              isOpen={this.state.isNavOpen}
              navbar
              className="row navBar"
            >
              <NavLink className="Hunt col-1" to="/home">
                <h1>Hunt</h1>
                <h4>Part-Time</h4>
              </NavLink>

              <span className="col-10 d-flex justify-content-center">
                <NavLink className="nav-link nav-btn mr-4" to="/budget">
                  Search Jobs
                </NavLink>
                <NavLink className="nav-link nav-btn mr-4" to="/portfolio">
                  Create Jobs
                </NavLink>
                {/* <NavLink className="nav-link nav-btn mr-4" to="/todo">
                  My Tasks
                </NavLink> */}
              </span>

              <span>
                <NavLink className="Nav-sign-up ml-auto" to="/login">
                  <span>Sign up</span>
                </NavLink>
                <NavLink className="Nav-sign-in ml-auto" to="/login">
                  <span>Sign ⅈn</span>
                </NavLink>
              </span>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
