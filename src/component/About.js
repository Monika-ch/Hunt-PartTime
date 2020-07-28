import React from "react";
import { Button, Card, CardHeader, CardBody } from "reactstrap";

// import { ModalBody, ModalHeader, Modal, Button, Navbar } from "reactstrap";

function About(props) {
  return (
    <React.Fragment>
      <div className="bg-info text-center p-4">
        <h2 className="text-white m-2">Our Mission</h2>
      </div>
      <div className="container-fluid">
        <div className="row mb-5" id="whyPartTime">
          <div className="col pt-2">
            <h3 className="page-heading">Why PartTime ?</h3>
            <div className="page-div-content">
              <p>
                <em>Hunt Part-Time</em> is a very simple and unique portal to
                create and look exclusively for <em>part-time</em> jobs, unlike
                other job portals who has a long and mixed list for job
                categories. It mainly targets clients who seek{" "}
                <em>part-time</em> ventures - hiring or getting hired.
              </p>
              <p>
                JOB CREATOR - Any indiviual, small business, store, etc who need
                part-time employees can create jobs.
              </p>
              <p>
                JOB SEEKER - A jobseeker can be anyone who is a student, someone
                looking for a part-time stint to earn som extra money, or simply
                looking to get a new job.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5 pb-5" id="features">
          <div className="col">
            <Card>
              <CardHeader>
                <h3>Features</h3>
              </CardHeader>
              <CardBody>
                <p>
                  The uniqueness lies in it being user-friendly and stripping
                  down the complexities of traditional professional networking
                  sites. The striking highlights of our{" "}
                  <strong>Hunt Part-Time</strong> portal are -
                </p>
                <ul className="list">
                  <li>- Specific to part-time job opportunities</li>
                  <li>- Simple job create/search methods</li>
                  <li>- Hassle free apply/create job options</li>
                  <li>- User-friendly portal navigaton design</li>
                  <li>- User-convinient profile building/editting</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
