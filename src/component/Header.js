import React from "react";
import { ModalBody, ModalHeader, Modal, Button, Navbar } from "reactstrap";
import Login from "./Login";
import Register from "./RegisterUser";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      loginModal: false,
      registerModal: false,
    };
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  toggleLoginModal = () => {
    this.setState({
      loginModal: !this.state.loginModal,
      registerModal: false,
    });
  };
  toggleRegisterModal = () => {
    this.setState({
      registerModal: !this.state.registerModal,
      // loginModal: false,
    });
  };
  render() {
    const closeBtn = (
      <Button className="close" onClick={this.toggleLoginModal}>
        &times;
      </Button>
    );
    return (
      <React.Fragment>
        <Navbar sticky="top" className="m-0 p-0">
          <div className="container-fluid navbar">
            <div className="Hunt col-1">
              <h1>Hunt</h1>
              <h4>Part-Time</h4>
            </div>

            <span
              className=" Nav-sign-in ml-auto btn btn-outline-info"
              onClick={this.toggleLoginModal}
            >
              Sign in
            </span>
            <Modal
              isOpen={this.state.loginModal}
              toggle={this.toggleLoginModal}
            >
              <ModalHeader
                toggle={this.toggleLoginModal}
                close={closeBtn}
                className="modalHeader bg-info"
              >
                <h4>Hunt | Part-Time</h4>
                <h5>Sign In !</h5>
              </ModalHeader>
              <ModalBody>
                <Login toggleLoginModal={this.toggleRegisterModal} />
              </ModalBody>
            </Modal>

            <Modal
              isOpen={this.state.registerModal}
              toggle={this.toggleRegisterModal}
            >
              <ModalHeader
                toggle={this.toggleRegisterModal}
                close={closeBtn}
                className="modalHeader bg-info"
              >
                <h4>Hunt | Part-Time</h4>
                <h5>Sign In !</h5>
              </ModalHeader>
              <ModalBody>
                <Register
                  addUser={this.props.addUser}
                  toggleRegisterModal={this.toggleLoginModal}
                />
              </ModalBody>
            </Modal>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
