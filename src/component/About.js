import React from "react";
import { Button, Card, CardHeader, CardBody } from "reactstrap";

// import { ModalBody, ModalHeader, Modal, Button, Navbar } from "reactstrap";

function About(props) {
  return (
    <React.Fragment>
      <div className="bg-info text-center p-4">
        <h2 className="text-white top-page-heading m-2">Our Mission</h2>
      </div>
      <div className="container-fluid">
        <div className="row mt-3 mb-5 justify-content-center" id="whyPartTime">
          <div className="col-md-6 pt-4">
            <h3 className="top-page-heading p-3">Why Hunt PartTime ?</h3>
            <div className="page-div-content p-3">
              <p>
                <em>Hunt PartTime</em> is a very simple and unique portal to
                create and look exclusively for <em>part-time</em> jobs, unlike
                other job portals who has a long and mixed list for job
                categories. It mainly targets clients who seek{" "}
                <em>part-time</em> ventures of hiring or getting hired.
              </p>
              <p>
                Job Creator - Any indiviual, small business, store, etc who
                needs part-time employees can create a job hassle-free in few
                easy steps.
              </p>
              <p>
                Job Seeker- Anyone who is a student, someone looking for a
                part-time stint to earn som extra money, or simply looking to
                get a new job can now look and apply exquisitely for part-times
                in the most convinient way possible.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5 pb-5 justify-content-center" id="features">
          <div className="col-md-6">
            <h3 className="page-heading p-3">Features</h3>
            <div className="page-div-content p-3 pt-5">
              <p>
                The uniqueness lies in it being user-friendly and stripping down
                the complexities of traditional professional networking sites.
                The striking highlights of our <em>Hunt Part-Time</em> portal
                are -
              </p>
              <ul className="list">
                <li>- Specific to part-time job opportunities</li>
                <li>- Simple job create/search methods</li>
                <li>- Hassle-free apply/create job options</li>
                <li>- User-friendly portal navigaton design</li>
                <li>- User-convinient profile building/editting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
