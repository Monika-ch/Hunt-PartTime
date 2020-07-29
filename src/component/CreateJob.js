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

  // handleSubmit = values;
  render() {
    return (
      <React.Fragment>
        <div className="bg-info text-center p-4">
          <h2 className="text-white top-page-heading m-2">Create Job</h2>
        </div>
        <div className="container-fluid">
          <div
            className="row mt-3 mb-5 pb-5 justify-content-center"
            id="contact"
          >
            <div className="col-md-6 pt-4">
              <h3 className="top-page-heading p-3">Want to Hire?</h3>
              <div className="page-div-content p-3">
                <p>
                  <em>Hunt PartTime</em> offers you an easy platform to look for
                  the right candidates for your partime jobs quickly.
                </p>
                <p>
                  All you have to do is fill out the form given below and you
                  are all set. Leave the rest to us. We will keep you notified
                  about the interested candidates.
                </p>
              </div>
              <div className="mt-2 pt-3">
                <Card className="card-login container-fluid">
                  <CardBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                      <div className="row justify-content-center form-group">
                        <div className="col-10">
                          <Control.text
                            model=".jobTitle"
                            id="jobTitle"
                            name="jobTitle"
                            placeholder="Job Title eg : Cashier"
                            className="form-control"
                            validators={{
                              required,
                            }}
                          />
                          <Errors
                            className="text-danger"
                            show="touched"
                            model=".jobTitle"
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
                            model=".businessName"
                            id="businessName"
                            name="businessName"
                            placeholder="Business Name eg : Coffee Cafe Day"
                            className="form-control"
                            validators={{
                              required,
                            }}
                          />
                          <Errors
                            className="text-danger"
                            show="touched"
                            model=".businessName"
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
                            model=".jobLocation"
                            id="jobLocation"
                            name="jobLocation"
                            placeholder="Location eg : Bellevue"
                            className="form-control"
                            validators={{
                              required,
                            }}
                          />
                          <Errors
                            className="text-danger"
                            model=".jobLocation"
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
                            model=".jobSalary"
                            id="jobSalary"
                            name="jobSalary"
                            placeholder="Salary eg : $ 20 per hour"
                            className="form-control"
                            validators={{
                              required,
                            }}
                          />
                          <Errors
                            className="text-danger"
                            model=".jobSalary"
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
                            model=".lastDateToApply"
                            id="lastDateToApply"
                            name="lastDateToApply"
                            placeholder="Last Date To Apply* (optional)"
                            className="form-control"
                          />
                          <Errors
                            className="text-danger"
                            model=".lastDateToApply"
                            show="touched"
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="row justify-content-center form-group">
                        <div className="col-10">
                          <Control.textarea
                            model=".jobRequirements"
                            id="jobRequirements"
                            name="jobRequirements"
                            placeholder="Requirements eg : Proficiency in calculations, making accurate entries"
                            className="form-control"
                            rows="4"
                            validators={{
                              required,
                            }}
                          />
                          <Errors
                            className="text-danger"
                            model=".jobRequirements"
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
                          <Control.textarea
                            model=".jobDescription"
                            id="jobDescription"
                            name="jobDescription"
                            placeholder="Job Description* (optional)"
                            className="form-control"
                            rows="4"
                          />
                          <Errors
                            className="text-danger"
                            model=".jobDescription"
                            show="touched"
                            component="div"
                          />
                        </div>
                      </div>

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
      </React.Fragment>
    );
  }
}

export default Contact;
