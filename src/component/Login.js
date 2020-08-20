import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  ModalBody,
  ModalHeader,
  Modal,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      email: "",
      password: "",
      isRegistered: false,
      touched: {
        email: false,
        password: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  authenticateUser(values) {
    // const email=  values.email;
    // const pwd = values.pwd;
    // const user = this.state.users.filter(user => user.email === email);
  }

  handleSubmit = (values) => {
    console.log("Current state is: " + JSON.stringify(values));
    this.authenticateUser(values);
  };
  render() {
    const closeBtn = (
      <Button className="close" onClick={this.toggleLoginModal}>
        &times;
      </Button>
    );
    return (
      <Modal
        isOpen={this.props.loginModal}
        toggle={this.props.toggleLoginModal}
      >
        <ModalHeader
          toggle={this.props.toggleLoginModal}
          close={closeBtn}
          className="modalHeader bg-info"
        >
          <h4>Hunt | Part-Time</h4>
          <h5>Sign In !</h5>
        </ModalHeader>
        <ModalBody>
          <Card className="card-login">
            <CardBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <div className="row justify-content-center form-group">
                  <div className="col-11">
                    <Control.text
                      model=".email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(6),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                        minLength: "Must be at least 3 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </div>
                </div>
                <div className="row justify-content-center form-group">
                  <div className="col-11">
                    <Control.text
                      model=".password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(1),
                        maxLength: maxLength(15),
                        isNumber,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".password"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                        minLength: "Must be at least 1 numbers",
                        maxLength: "Must be 15 numbers or less",
                        isNumber: "Must be a number",
                      }}
                    />
                  </div>
                </div>
                <div className="row justify-content-center form-group">
                  <div className="col-11 mt-3">
                    <Button
                      type="submit"
                      color="primary"
                      className="loginButton"
                    >
                      Sign In
                    </Button>
                  </div>
                </div>
              </LocalForm>
              <h6>
                New User?{" "}
                <a href="#" onClick={this.props.toggleRegisterModal}>
                  Sign Up
                </a>
              </h6>
            </CardBody>
          </Card>
        </ModalBody>
      </Modal>
    );
  }
}
export default Login;
