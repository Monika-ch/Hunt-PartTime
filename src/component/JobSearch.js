import React, { Component } from "react";
import { Button, Label, Col, Row } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

class JobSearch extends Component {
  // *************** Handle Submit****************
  handleSubmit = (values) => {
    console.log("Current state is: " + JSON.stringify(values));
    this.props.queryData(values.jobTitle, values.jobLocation, values.salary);
  };

  render() {
    return (
      <React.Fragment>
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Row className="form-group">
            <Col md={5}>
              <Control.text
                model=".jobTitle"
                id="jobTitle"
                name="jobTitle"
                placeholder="Job Title / Company eg: Cashier"
                className="form-control"
              />
            </Col>

            <Col md={5}>
              <Control.text
                model=".jobLocation"
                id="jobLocation"
                name="jobLocation"
                placeholder="Location radius eg: 1 km"
                className="form-control"
              />
            </Col>

            {/* <Col md={4}>
              <Control.text
                model=".salary"
                id="salary"
                name="salary"
                placeholder="Salary eg: $5000pm"
                className="form-control"
              />
            </Col> */}

            <Col md={1}>
              <Button type="submit" color="primary">
                {/* <span className="SearchButton"> */}
                <i class="fa fa-search btn btn-primary" aria-hidden="true"></i>
                {/* </span>{" "} */}
              </Button>
            </Col>
          </Row>
        </LocalForm>
      </React.Fragment>
    );
  }
}

export default JobSearch;
