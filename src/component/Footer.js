import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container-fluid site-footer bg-info">
      <div className="row">
        <div className="col-4">
          <p className="lead links">
            <Link className="links" to="/about">
              About
            </Link>
          </p>
          <ul className="list">
            <li className="text-white">
              <Link to="/about/#whyPartTime" className="links">
                <em>Why PartTime</em>
              </Link>
            </li>
            <li className="text-white">
              <Link to="/about/#features" className="links">
                <em>Features</em>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-4 my-auto">
          <p>Copyright ⓒ {year} Hunt Part-Time. All rights reserved.</p>
        </div>
        <div className="col-4">
          <p className="lead">Contact</p>
          <ul className="list">
            <li className="text-white">
              <em>How To Reach Us</em>
            </li>
            <li className="text-white">
              <em>Feedback</em>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
