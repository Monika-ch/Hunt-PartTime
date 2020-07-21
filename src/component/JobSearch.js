import React, { Component } from "react";

class JobSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { userInput: "" };
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
    this.props.onUserInputText(event.target.value);
  };

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default JobSearch;
