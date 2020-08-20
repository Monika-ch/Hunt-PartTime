import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Register from "./RegisterUser";
import JobsData from "./JobsData";
import JobSearch from "./JobSearch";

function Home(props) {
  const [searchInput, setSearchInput] = useState(null);
  const queryData = (title, location, salary) => {
    console.log(title, location, salary);
    setSearchInput({ title: title, location: location, salary: salary });
  };
  const [registerModal, setRegisterModal] = useState(false);
  const toggleRegisterModal = () => {
    setLoginModal(false);
    setRegisterModal(!registerModal);
  };

  const [loginModal, setLoginModal] = useState(false);
  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
    setRegisterModal(false);
  };

  return (
    <React.Fragment>
      <Header
        loginModal={loginModal}
        registerModal={registerModal}
        toggleLoginModal={toggleLoginModal}
        toggleRegisterModal={toggleRegisterModal}
      />

      <JobSearch queryData={queryData} />
      {searchInput != null && (
        <div className="container-fluid home-container my-3">
          <JobsData searchQuery={searchInput} />
        </div>
      )}
      <div className="jumbotron jumbotron-fluid mt-0 mb-0">
        <div className="container pt-0">
          <div className="row">
            <div className="col-md-8 pl-5 mx-auto">
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
                  onClick={toggleRegisterModal}
                >
                  Register Now
                </span>
              </p>

              <Register
                loginModal={loginModal}
                registerModal={registerModal}
                toggleLoginModal={toggleLoginModal}
                toggleRegisterModal={toggleRegisterModal}
                addUser={props.addUser}
              />
            </div>

            <div className="col-lg-3 col-sm-6 col-8 m-auto">
              <div>
                <Link to="/createJob">
                  <h3 className="createJob">
                    Create Job <i className="fa fa-plus mt-1 pt-1"></i>
                  </h3>
                </Link>
              </div>
            </div>
          </div>
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
