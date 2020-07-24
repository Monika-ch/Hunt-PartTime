import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Login from "./Login";
import { connect } from "react-redux";
import { addUser } from "../redux/ActionCreators";
import Register from "./RegisterUser";

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
        <Header addUser={this.props.addUser} />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => <Home addUser={this.props.addUser} />}
          />
          {/* <Route path="/home" component={HomePage} addUser={this.props.addUser}/> */}
          {/* <Route
            exact
            path="/portfolio"
            render={() => (
              <Portfolio
                products={this.props.products}
                addProduct={this.props.addProduct}
                deleteProduct={this.props.deleteProduct}
                isRegistered={userIsRegistered}
              />
            )}
          /> */}
          {/* <Route
            exact
            path="/budget"
            render={() => (
              <Budget
                items={this.props.items}
                deleteItem={this.props.deleteItem}
                addExpense={this.props.addExpense}
                resetTransactionForm={this.props.resetTransactionForm}
              />
            )}
          /> */}
          {/* <Route path="/todo" component={TodoList} /> */}
          <Route
            exact
            path="/login"
            render={() => (
              <Login isRegistered={userIsRegistered} users={this.props.users} />
            )}
          />
          <Route
            exact
            path="/registerUser"
            render={() => (
              <Register users={this.props.users} addUser={this.props.addUser} />
            )}
          />
         
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
