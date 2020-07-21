import React, { Component } from "react";
import {
  Button,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
// const isNumber = (val) => !isNaN(+val);
const validateEmail = (val) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(val);
};

class Register extends Component {
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
      touched: {
        name: false,
        email: false,
        contactNum: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (values) => {
    console.log("Current state is: " + JSON.stringify(values));
    this.props.addUser(
      values.name,
      values.email,
      values.contactNum,
      values.requirement,
      values.experience,
      values.education
    );
    alert("Successfully Added");
  };

  render() {
    return (
      <Card className="card-login">
        <CardBody>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <div className="row justify-content-center form-group">
              <div className="col-11">
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  placeholder="Full Name"
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
              <div className="col-11">
                <Control.text
                  model=".email"
                  id="email"
                  name="email"
                  placeholder="Email"
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
              <div className="col-11">
                <Control.text
                  model=".contactNum"
                  id="contactNum"
                  name="contactNum"
                  placeholder="Contact"
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
              <div className="col-11">
                <Control.select
                  model=".requirement"
                  id="requirement"
                  name="requirement"
                  className="form-control"
                >
                  <option>Part-Time Interested</option>
                  <option>Marketing</option>
                  <option>Daily Services</option>
                  <option>Management</option>
                  <option>IT Job</option>
                  <option>Others</option>
                </Control.select>
              </div>
            </div>
            <div className="row justify-content-center form-group">
              <div className="col-11">
                <Control.select
                  model=".experience"
                  id="experience"
                  name="experience"
                  className="form-control"
                >
                  <option>Related Experience</option>
                  <option>0-6 mnth </option>
                  <option>6-12 mnth</option>
                  <option>1+ yr</option>
                  <option>2+ yr</option>
                </Control.select>
              </div>
            </div>
            <div className="row justify-content-center form-group">
              <div className="col-11">
                <Control.select
                  model=".education"
                  id="education"
                  name="education"
                  className="form-control"
                >
                  <option>Highest Education</option>
                  <option>School Graduates</option>
                  <option>Bachelor Degree</option>
                  <option>Masters Degree</option>
                  <option>Course Certified</option>
                  <option>None</option>
                </Control.select>
              </div>
            </div>
            <div className="row justify-content-center form-group">
              <div className="col-11 mt-3">
                <Button type="submit" color="primary" className="loginButton">
                  Sign Up
                </Button>
              </div>
            </div>
          </LocalForm>
          <h6>
            Already have an account? {"   "}
            <Link to="/login" className="signUp">
              Log In
            </Link>
          </h6>
        </CardBody>
      </Card>
    );
  }
}
export default Register;
