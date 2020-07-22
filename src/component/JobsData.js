import React, { Component } from "react";

class JobsData extends Component {
  componentDidMount() {
    const fetchData = fetch("https://indeed-com.p.rapidapi.com/search/jobs?sort=relevance&job_type=parttime&offset=0&query=Data%20Engineer&radius=100", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "indeed-com.p.rapidapi.com",
			"x-rapidapi-key": "31a70f66f6mshdabc7b66590ed46p1acb0ajsn12caa46bc356"
		}
	})
.then((response) => {
	return response.json()})
      .then((response) => {
        console.log("Response after running query ");
		console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}

export default JobsData;
