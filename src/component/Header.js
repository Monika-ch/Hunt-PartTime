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
import Login from './Login';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      loginModal: false,
      registerModel:false,
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
               
              </span>

             
                {/* <span
                  className=" Nav-sign-up ml-auto"
                  onClick={this.toggleRegisterModel}
                >
                  Sign up
                </span>
                <Modal
                  isOpen={this.state.registerModel}
                  toggle={this.toggleRegisterModel}
                >
                  <ModalHeader
                    toggle={this.toggleRegisterModel}
                    close={closeBtn}
                   
                    className="modalHeader"
                  >
                    <h4 className="welcome">Hunt | Part-Time</h4>
                    <h5>Sign up for free !</h5>
                  </ModalHeader>
                  <ModalBody>
                    <Register addUser={this.props.addUser} />
                  </ModalBody>
                </Modal> */}
               
                  <span className=" Nav-sign-up ml-auto"
                  onClick={this.toggleLoginModal}>Sign ⅈn</span>
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
                    <Login  />
                  </ModalBody>
                </Modal>
               
             
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
