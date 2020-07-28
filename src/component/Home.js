import React, { useState } from "react";
import { ModalBody, ModalHeader, Modal, Button } from "reactstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./RegisterUser";
import Login from "./Login";

import JobsData from "./JobsData";
import JobSearch from "./JobSearch";

function Home(props) {
  const queryData = (title, location, salary) => {
    console.log(title, location, salary);
    setSearchInput({ title: title, location: location, salary: salary });
  };

  const [searchInput, setSearchInput] = useState(null);

  // const [loginModal, setloginModal] = useState(false);
  // const [registerModal, setregisterModal] = useState(false);
  // const toggleLoginModal = () => {
  //   setloginModal(!loginModal);
  //   setregisterModal(false);
  // };
  // const toggleRegisterModal = () => {
  //   setregisterModal(!registerModal);
  // };
  // const closeBtn = (
  //   <Button className="close" onClick={toggleLoginModal}>
  //     &times;
  //   </Button>
  // );

  return (
    <React.Fragment>
      <JobSearch queryData={queryData} />
      {/* {searchInput != null && ( */}
      <div className="container-fluid home-container my-3">
        <JobsData searchQuery={searchInput} />
      </div>
      {/* )} */}

      <div className="jumbotron jumbotron-fluid mt-0 mb-0">
        <div className="container pt-0">
          <p className="lead pt-0">Looking For Part Times ?</p>
          <h1 className="display-4 ">Now Hire or Get Hired.</h1>
          <hr className="my-2" />
          <p>
            <Link className="jumbo-link" to="/about">
              More info
            </Link>
          </p>
          <p className="lead mt-4">
            <span
              className="btn btn-primary btn-lg"
              onClick={props.toggleRegisterModal}
            >
              Register Now
            </span>
            {/* <Modal isOpen={registerModal} toggle={toggleRegisterModal}>
              <ModalHeader
                toggle={toggleRegisterModal}
                className="modalHeader bg-info"
              >
                <h4>Hunt | Part-Time</h4>
                <h5>Sign up for free !</h5>
              </ModalHeader>
              <ModalBody> */}
            <Register
              addUser={props.addUser}
              toggleRegisterModal={props.toggleLoginModal}
            />
            {/* </ModalBody>
            </Modal> */}

            {/* <Modal isOpen={loginModal} toggle={toggleLoginModal}>
              <ModalHeader
                toggle={toggleLoginModal}
                close={closeBtn}
                className="modalHeader bg-info"
              >
                <h4>Hunt | Part-Time</h4>
                <h5>Sign up for free !</h5>
              </ModalHeader>
              <ModalBody>
                <Login toggleLoginModal={toggleRegisterModal} />
              </ModalBody>
            </Modal> */}
          </p>
        </div>
      </div>
      <div className="container-fluid strip-one">
        <p className="lead mb-0">
          <span className="pr-1">
            Tired of too many steps to apply for a job?{" "}
          </span>
          <span className="pr-1">Now Apply Hassle Free. </span>
          <span>We Don't Ask Much! </span>
        </p>
      </div>
    </React.Fragment>
  );
}
export default Home;
