import React, { Component } from "react";
import { Button } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";

class JobSearch extends Component {
  // *************** Handle Submit****************
  handleSubmit = (values) => {
    console.log("Current state is: " + JSON.stringify(values));
    this.props.queryData(values.jobTitle, values.jobLocation, values.salary);
  };

  render() {
    return (
      <React.Fragment>
        <div className="bg-info">
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <div className="form-group row">
              <span className="jobTitle mt-1 mr-4">
                <Control.text
                  model=".jobTitle"
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="Job Title / Company eg: Cashier"
                  className="form-control"
                />
              </span>
              <span className="jobTitle mt-1 mr-3">
                <Control.text
                  model=".jobLocation"
                  id="jobLocation"
                  name="jobLocation"
                  placeholder="Location Radius eg: 1 km"
                  className="form-control"
                />
              </span>
              <Button type="submit" color="primary" className="mt-1">
                <i
                  class="fa fa-search btn btn-primary p-0"
                  aria-hidden="true"
                ></i>
              </Button>
            </div>
          </LocalForm>
        </div>
      </React.Fragment>
    );
  }
}

export default JobSearch;
