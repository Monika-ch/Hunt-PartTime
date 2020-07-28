import React, { Component } from "react";
import {
  ModalBody,
  ModalHeader,
  Modal,
  Button,
  Card,
  CardBody,
  TextArea,
} from "reactstrap";
import Login from "./Login";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const validateEmail = (val) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(val);
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      name: "",
      email: "",
      contactNum: "",
      requirement: "",
      experience: "",
      education: "",
      isRegistered: false,
      registerModal: false,
      loginModal: false,
      touched: {
        name: false,
        email: false,
        contactNum: false,
      },
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="bg-info text-center p-4">
          <h2 className="text-white top-page-heading m-2">Contact & Support</h2>
        </div>
        <div className="container-fluid">
          <div
            className="row mt-3 mb-5 pb-5 justify-content-center"
            id="contact"
          >
            <div className="col-md-6 pt-4">
              <h3 className="top-page-heading p-3">Contact</h3>
              <div className="page-div-content p-3">
                <p>
                  <em>Phone No</em> : <em>+425-365-7756</em> |{" "}
                  <em>+425-365-2522</em>
                </p>
                <p>
                  <em>Email</em> : <em>monika12b@gmail.com</em> |{" "}
                  <em>nehaagrawal87@gmail.com</em>
                </p>
                <p>
                  You can contact us via any of the given numbers or email ids.
                  We will try to reach you as soon as we can.
                </p>
              </div>
            </div>
          </div>
          {/* <hr className="col-6 mx-auto p-5" /> */}
          <div className="row mb-5 pb-5 justify-content-center" id="feedback">
            <div className="col-md-6">
              <h3 className="page-heading p-3">Support/Feedback</h3>
              <div className="page-div-content p-3 pt-5">
                <p>
                  Need help? or Something is not working right? or Have
                  suggestions? You can let us know with following
                  support/feedback form. We will reach out to you.
                </p>
                <div className="mt-5 pt-3">
                  <Card className="card-login container-fluid">
                    <CardBody>
                      <LocalForm
                        onSubmit={(values) => this.handleSubmit(values)}
                      >
                        <div className="row justify-content-center form-group">
                          <div className="col-10">
                            <Control.text
                              model=".name"
                              id="name"
                              name="name"
                              placeholder="Name : Sarah Joseph"
                              className="form-control"
                              validators={{
                                required,
                              }}
                            />
                            <Errors
                              className="text-danger"
                              model=".name"
                              show="touched"
                              component="div"
                              messages={{
                                required: "Required",
                              }}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-center form-group">
                          <div className="col-10">
                            <Control.text
                              model=".contactNum"
                              id="contactNum"
                              name="contactNum"
                              placeholder="Contact : +425-777-999"
                              className="form-control"
                              validators={{
                                required,
                              }}
                            />
                            <Errors
                              className="text-danger"
                              model=".contactNum"
                              show="touched"
                              component="div"
                              messages={{
                                required: "Required",
                              }}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-center form-group">
                          <div className="col-10">
                            <Control.text
                              model=".email"
                              id="email"
                              name="email"
                              placeholder="Email : sarahjoseph25@gmail.com"
                              className="form-control"
                              validators={{
                                required,
                                validateEmail,
                              }}
                            />
                            <Errors
                              className="text-danger"
                              model=".email"
                              show="touched"
                              component="div"
                              messages={{
                                required: "Required",
                                validateEmail: "Invalid email id",
                              }}
                            />
                          </div>
                        </div>

                        <div className="row justify-content-center form-group">
                          <div className="col-10">
                            <Control.textarea
                              model=".feedback"
                              id="feedback"
                              name="feedback"
                              rows="4"
                              placeholder="Tell us how can we assist you . ."
                              className="form-control"
                              validators={{
                                required,
                              }}
                            />
                            <Errors
                              className="text-danger"
                              model=".feedback"
                              show="touched"
                              component="div"
                              messages={{
                                required: "Required",
                              }}
                            />
                          </div>
                        </div>
                        {/* <div className="row justify-content-center form-group">
                          <div className="col-10">
                            <div className="form-check">
                              <label check>
                              <Control.checkbox
                                model=".agree"
                                name="agree"
                                className="form-check-input mt-2"
                              />
                              May we contact you?
                              </label>
                            </div>
                          </div>
                          <div className="col-10">
                            <Control.select
                              model=".contactType"
                              name="contactType"
                              className="form-control"
                            >
                              <option>By Phone</option>
                              <option>By Email</option>
                            </Control.select>
                          </div>
                        </div> */}

                        <div className="row justify-content-center form-group">
                          <div className="col-10 mt-3">
                            <Button
                              type="submit"
                              color="info"
                              className="loginButton"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </LocalForm>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
