import React from "react";
import {
  CardTitle,
  CardSubtitle,
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
      loginModal: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  toggleLoginModal() {
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
        <Navbar sticky="top">
          <div className="container-fluid navbar">
            <div className="Hunt col-1">
              <h1>Hunt</h1>
              <h4>Part-Time</h4>
            </div>

            {/* <span>
              <span
                className=" Nav-sign-up ml-auto"
                onClick={this.toggleLoginModal}
              >
                Sign up
              </span>
              <Modal
                isOpen={this.state.loginModal}
                toggle={this.toggleLoginModal}
              >
                <ModalHeader
                  toggle={this.toggleLoginModal}
                  close={closeBtn}
                  gin
                  className="modalHeader"
                >
                  <h4 className="welcome">Hunt | Part-Time</h4>
                  <h5>Sign up for free !</h5>
                </ModalHeader>
                <ModalBody>
                  <Register addUser={this.props.addUser} />
                </ModalBody>
              </Modal> */}
            <NavLink className="Nav-sign-in ml-auto" to="/login">
              <span>Sign ⅈn</span>
            </NavLink>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
