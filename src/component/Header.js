import React from "react";
import {
  ModalBody,
  ModalHeader,
  Modal,
  Button,
  Navbar,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Register from "./RegisterUser";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      loginModal:false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  toggleLoginModal(){
    this.setState({
      loginModal: !this.state.loginModal,
    });
  }

  render() {
    const closeBtn = (
      <Button className="close" onClick={this.toggleLoginModal}>
        &times;
      </Button>
    );
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
                {/* <NavLink className="Nav-sign-up ml-auto" to="/login"> */}
                  <Button
                    className=" Nav-sign-up ml-auto"
                    onClick={this.toggleLoginModal}
                  >
                    Sign Up
                  </Button>
                {/* </NavLink> */}
                <Modal isOpen={this.state.loginModal} toggle={this.toggleLoginModal}>
                  <ModalHeader
                    toggle={this.toggleLoginModal}
                    close={closeBtn}
                    gin
                    className="modalHeader"
                  ></ModalHeader>
                  <ModalBody>
                    <Register users={this.props.users} addUser={this.props.addUser}/>
                  </ModalBody>
                </Modal>
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
