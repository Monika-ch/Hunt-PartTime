import React, { useState, Component } from "react";
import { ModalBody, ModalHeader, Modal, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JobSearch from "./JobSearch";
import Register from "./RegisterUser";
import JobsData from "./JobsData";

function Home(props) {
  const queryData = (title, location, salary) => {
    console.log(title, location, salary);
    setSearchInput({ title: title, location: location, salary: salary });
  };

  const [searchInput, setSearchInput] = useState(null);
  const [loginModal, setloginModal] = useState(false);
  const toggleLoginModal = () => setloginModal(!loginModal);
  const closeBtn = (
    <Button className="close" onClick={toggleLoginModal}>
      &times;
    </Button>
  );

  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid mt-0 mb-0">
        <div className="container pt-0">
          <p className="lead pt-0">Looking For Part Times ?</p>
          <h1 className="display-3">Now Hire or Get Hired.</h1>
          {/* <p className="lead">Looking For Part Times ?</p> */}
          <hr className="my-2" />
          <p>More info</p>
          <p className="lead">
            <span className="btn btn-primary btn-lg" onClick={toggleLoginModal}>
              Register Now
            </span>
            <Modal isOpen={loginModal} toggle={toggleLoginModal}>
              <ModalHeader
                toggle={toggleLoginModal}
                close={closeBtn}
                gin
                className="modalHeader"
              >
                <h4 className="welcome">Hunt | Part-Time</h4>
                <h5>Sign up for free !</h5>
              </ModalHeader>
              <ModalBody>
                <Register addUser={props.addUser} />
              </ModalBody>
            </Modal>
          </p>
        </div>

        {/* <div className="row">
        <div className="col-md-5 mt-5 mb-4">
          <h2>Hire. Get Hired.</h2>
        </div>
      </div> */}
      </div>

      <div className="container-fluid strip-one">
        <p className="lead">
          <span className="pr-1">
            Tired of too many steps to apply for a job?{" "}
          </span>
          <span className="pr-1">Now Apply Hassle Free. </span>
          <span>We Don't Ask Much! </span>
        </p>
      </div>

      <div className="container-fluid home-container">
        <p className="lead">
          Tired of too many steps to apply for a job? Now Apply Hassle Free. We
          Don't Ask Much!
        </p>
        <JobsData searchQuery={searchInput} />
        <JobSearch queryData={queryData} />
      </div>
    </React.Fragment>
  );
}
export default Home;
