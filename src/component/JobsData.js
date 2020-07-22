import React, { Component } from "react";

class JobsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }
  componentDidMount() {
    this.fetchJobData();
  }
  buildJobProfile(results) {
    return {
      advertiserId:results.advertiserId,
      city: results.city,
      company: results.company,
      date: results.date,
      jobtitle: results.jobtitle,
      snippet: results.snippet,
      url: results.url,
    };
  }

  fetchJobData() {
    var jobprofile = [];
     fetch(
      "https://indeed-com.p.rapidapi.com/search/jobs?sort=relevance&job_type=parttime&offset=0&query=Data%20Engineer&radius=100",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "indeed-com.p.rapidapi.com",
          "x-rapidapi-key":
            "31a70f66f6mshdabc7b66590ed46p1acb0ajsn12caa46bc356",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("Response after running query ");
        var results = response.results;
        for (let i = 0; i < results.length; i++) {
          jobprofile.push(this.buildJobProfile(results[i]));
        }
        console.log("Updating state:", jobprofile);
        this.setState({
          profiles: jobprofile,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    var items = [];
    items.push(this.state.profiles);
    console.log(`this is the final one ${items}`);
    return(<div />);
    // if (items != null) {
    //   const list = items.map((item) => {
    //     return (
    //       <tr key={item.advertiserId}>
    //         <td>{item.city}</td>
            
    //       </tr>
    //     );
    //   });
    // } else {
    //   return (
    //     <div>
    //       <p>No match found.</p>
    //     </div>
    //   );
    // }
  }
}

export default JobsData;
