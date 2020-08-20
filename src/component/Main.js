import React, { Component } from "react";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import CreateJob from "./CreateJob";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../redux/ActionCreators";
import Login from "./Login";

const mapDispatchToProps = {
  addUser: (name, email, contactNum, requirement, experience, education) =>
    addUser(name, email, contactNum, requirement, experience, education),
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

var userIsRegistered = true;
class Main extends Component {
  render() {
    return (
      <div className="overlay">
        <Switch>
          <Route
            exact
            path="/home"
            render={() => <Home addUser={this.props.addUser} />}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <Login isRegistered={userIsRegistered} users={this.props.users} />
            )}
          />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/contact" render={() => <Contact />} />
          <Route exact path="/createJob" render={() => <CreateJob />} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
