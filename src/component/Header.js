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
import Login from "./Login";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      loginModal: false,
      registerModel: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    // this.toggleRegisterModel = this.toggleRegisterModel.bind(this);
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
  // toggleRegisterModel(){
  //   this.setState({
  //     registerModel : !this.state.registerModel
  //   });
  // }
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

            <span
              className=" Nav-sign-up ml-auto"
              onClick={this.toggleLoginModal}
            >
              Sign ⅈn
            </span>
            <Modal
              isOpen={this.state.loginModal}
              toggle={this.toggleLoginModal}
            >
              <ModalHeader
                toggle={this.toggleLoginModal}
                close={closeBtn}
                className="modalHeader"
              >
                <h4 className="welcome">Hunt | Part-Time</h4>
                <h5>Sign ⅈn</h5>
              </ModalHeader>
              <ModalBody>
                <Login />
              </ModalBody>
            </Modal>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
