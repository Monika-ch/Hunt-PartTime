import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

// **********comment const jobData below for api testing************

const jobData = [
  {
    jobtitle: "Earn while teaching English from home",
    company: "YiYiEnglish",
    city: "Remote",
    snippet:
      "We ask our <b>teachers</b> make a 6 month or 1 year commitment to ensure continuity for our students. Our students look forward to their lessons and we depend on…",
    date: "Thu, 06 Jun 2019 19:44:25 GMT",
    url:
      "https://www.indeed.com/viewjob?jk=e694c6858e67c31c&qd=hrWtsE_NGUuzcnmK1b-aNENbScxKOliOzu9GT_iM1tqaqOP0z3ENwDcE8bbr15tv5TKAlzN2u7MDh7qBwn8qSJCHCCBZRkS8e03k5wO0A9s&indpubnum=8476096585482500&atk=1edt80sa9r519802",
  },
  {
    jobtitle: "Teacher (DoDEA Virtual High School)",
    company: "US Department of Defense",
    city: "Quantico",
    snippet:
      "<b>Teacher</b> (English), <b>Teacher</b> (Computer Science), <b>Teacher</b> (General Science), and <b>Teacher</b> (Spanish). <b>Teacher</b>, Computer Science - A major in computer science, a…",
    date: "Fri, 29 May 2020 09:57:35 GMT",
    url:
      "https://www.indeed.com/viewjob?jk=050f6c38dabbfd7f&qd=hrWtsE_NGUuzcnmK1b-aNENbScxKOliOzu9GT_iM1tqaqOP0z3ENwDcE8bbr15tv5TKAlzN2u7MDh7qBwn8qSJCHCCBZRkS8e03k5wO0A9s&indpubnum=8476096585482500&atk=1edt80sa9r519802",
  },
  {
    advertiserId: 36410257,
    jobtitle:
      "Teacher for FCPS Rising 2nd Graders for Full-Time Learning in the Home",
    company: "Concepts Communications",
    city: "Fort Hunt",
    snippet:
      "This position is for a <b>teacher</b> or educator who can teach at the elementary grade level as the students are rising 2nd graders in our home.",
    date: "Tue, 21 Jul 2020 16:09:16 GMT",
    url:
      "https://www.indeed.com/viewjob?jk=67e117e413867ca0&qd=hrWtsE_NGUuzcnmK1b-aNENbScxKOliOzu9GT_iM1tqaqOP0z3ENwDcE8bbr15tv5TKAlzN2u7MDh7qBwn8qSJCHCCBZRkS8e03k5wO0A9s&indpubnum=8476096585482500&atk=1edt80sa9r519802",
  },
  {
    jobtitle: "Online English teacher (Home based).",
    company: "TipTop ESL Ltd",
    city: "St. Louis",
    snippet:
      "They are the premier online ESL teaching company with over 30,000 <b>teachers</b> working worldwide online from their own homes. Work from the comfort of your home.",
    date: "Wed, 22 Jul 2020 11:23:10 GMT",
    url:
      "https://www.indeed.com/viewjob?jk=f26d2b5ee632bf7c&qd=hrWtsE_NGUuzcnmK1b-aNENbScxKOliOzu9GT_iM1tqaqOP0z3ENwDcE8bbr15tv5TKAlzN2u7MDh7qBwn8qSJCHCCBZRkS8e03k5wO0A9s&indpubnum=8476096585482500&atk=1edt80sa9r519802",
  },
  {
    jobtitle: "Teacher (Gifted/Talented)",
    company: "US Department of the Interior",
    city: "Fort Wingate",
    snippet:
      "As a <b>Teacher</b> (Gifted/Talented) you will be responsible for serving as a classroom <b>teacher</b> in a BIE school on or near the Reservation. How You Will Be Evaluated.",
    date: "Tue, 21 Jul 2020 09:45:30 GMT",
    url:
      "https://www.indeed.com/viewjob?jk=53733385e347772c&qd=hrWtsE_NGUuzcnmK1b-aNENbScxKOliOzu9GT_iM1tqaqOP0z3ENwDcE8bbr15tv5TKAlzN2u7MDh7qBwn8qSJCHCCBZRkS8e03k5wO0A9s&indpubnum=8476096585482500&atk=1edt80sa9r519802",
  },
  {
    jobtitle: "Teacher (Elementary)",
    company: "US Department of the Interior",
    city: "Crownpoint",
    snippet:
      "As a <b>Teacher</b> (Elementary) you will be responsible for serving as a classroom <b>teacher</b> in a BIE school on or near the Reservation. How You Will Be Evaluated.",
    date: "Wed, 22 Jul 2020 15:53:03 GMT",
    url:
      "https://www.indeed.com/viewjob?jk=3102dc8cd9dd7f67&qd=hrWtsE_NGUuzcnmK1b-aNENbScxKOliOzu9GT_iM1tqaqOP0z3ENwDcE8bbr15tv5TKAlzN2u7MDh7qBwn8qSJCHCCBZRkS8e03k5wO0A9s&indpubnum=8476096585482500&atk=1edt80sa9r519802",
  },
  {
    jobtitle: "Teacher",
    company: "US Department of Justice",
    city: "Prince George",
    snippet:
      "Serves as a <b>teacher</b> and provides integrated programs in educational training to inmates. <b>Teacher</b> certification or licensure in a State, the District of Columbia…",
    date: "Tue, 30 Jun 2020 21:55:47 GMT",
    url:
      "https://www.indeed.com/viewjob?jk=679e9304c8e7061d&qd=hrWtsE_NGUuzcnmK1b-aNENbScxKOliOzu9GT_iM1tqaqOP0z3ENwDcE8bbr15tv5TKAlzN2u7MDh7qBwn8qSJCHCCBZRkS8e03k5wO0A9s&indpubnum=8476096585482500&atk=1edt80sa9r519802",
  },
  {
    advertiserId: 34949325,
    jobtitle: "Online essays correctors",
    company: "ABOX educational institute LTD",
    city: "Remote",
    snippet:
      "Abox is an online school providing lessons and workshops of all subjects to its students ranging from primary to middle school.",
    date: "Tue, 12 May 2020 08:12:18 GMT",
    url:
      "https://www.indeed.com/viewjob?jk=23098c1fcb39599a&qd=hrWtsE_NGUuzcnmK1b-aNENbScxKOliOzu9GT_iM1tqaqOP0z3ENwDcE8bbr15tv5TKAlzN2u7MDh7qBwn8qSJCHCCBZRkS8e03k5wO0A9s&indpubnum=8476096585482500&atk=1edt80sa9r519802",
  },
  {
    advertiserId: 15840249,
    jobtitle:
      "K-9 Tutoring $50 per hour : K-12 Flexible scheduling and great pay",
    company: "Marin Tutors",
    city: "Mill Valley",
    snippet:
      "Marin Tutors seeks talented math, reading and science tutors and <b>teachers</b> for grades K-9. Subjects include math,science, English, Spanish, algebra, geometry,…",
    date: "Fri, 17 Jul 2020 00:14:05 GMT",
    url:
      "https://www.indeed.com/viewjob?jk=2d4da79988f1901f&qd=hrWtsE_NGUuzcnmK1b-aNENbScxKOliOzu9GT_iM1tqaqOP0z3ENwDcE8bbr15tv5TKAlzN2u7MDh7qBwn8qSJCHCCBZRkS8e03k5wO0A9s&indpubnum=8476096585482500&atk=1edt80sa9r519802",
  },
  {
    jobtitle: "Online English Teacher (Nikola)",
    company: "YiYiEnglish",
    city: "Remote",
    snippet:
      "Transcend beyond being simply a <b>teacher</b>. We believe that <b>teachers</b> are the heart of our organization, so we do not limit our prospective applicants to teachers…",
    date: "Tue, 19 Feb 2019 02:50:57 GMT",
    url:
      "https://www.indeed.com/viewjob?jk=1970f80b85d50999&qd=hrWtsE_NGUuzcnmK1b-aNENbScxKOliOzu9GT_iM1tqaqOP0z3ENwDcE8bbr15tv5TKAlzN2u7MDh7qBwn8qSJCHCCBZRkS8e03k5wO0A9s&indpubnum=8476096585482500&atk=1edt80sa9r519802",
  },
];

class JobsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // **********comment the line below for api testing************

      profiles: jobData,

      // **********uncomment the line below for api testing************
      // profiles: [],
      query: { title: "", location: "", salary: "" },
    };
  }

  buildJobProfile(results) {
    return {
      advertiserId: results.advertiserId,
      jobtitle: results.jobtitle,
      company: results.company,
      city: results.city,
      snippet: results.snippet,
      date: results.date,
      url: results.url,
    };
  }

  checkIfDuplicateQuery = () => {
    if (
      this.state.query.title === this.props.searchQuery.title &&
      this.state.query.location === this.props.searchQuery.location &&
      this.state.query.salary === this.props.searchQuery.salary
    ) {
      console.log("Duplicate query.not doing anything");
      return true;
    }

    this.setState({ query: this.props.searchQuery });
    return false;
  };

  fetchJobData() {
    var jobprofile = [];

    if (this.props.searchQuery === null) {
      return <div></div>;
    }

    if (this.checkIfDuplicateQuery()) return;
    var baseUrl =
      "https://indeed-com.p.rapidapi.com/search/jobs?sort=relevance&job_type=parttime&offset=0&query=" +
      this.props.searchQuery.title +
      "&radius=" +
      this.props.searchQuery.location;
    fetch(baseUrl, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "indeed-com.p.rapidapi.com",
        "x-rapidapi-key": "8f5b1e7221msh175656715c0b4e1p1cd508jsn51d362415392",
      },
    })
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
    // **********uncomment the line below for api testing************
    // this.fetchJobData();

    items.push(this.state.profiles);
    console.log(`this is the final one ${items}`);
    return (
      <div className="Jobdeck">
        <div className="Jobdeck-cards">
          {this.state.profiles.map((p) => (
            <div className="mb-1 col-6 mx-auto">
              <Card className="card">
                <CardBody>
                  <a href={p.url} className="link">
                    <CardTitle className="card-link text-info">
                      {p.jobtitle}
                    </CardTitle>
                    <hr className="mx-5" />
                  </a>
                  <CardSubtitle> {p.company}</CardSubtitle>
                  <p className="text-info">{p.city}</p>
                  <p>
                    <small>{p.date}</small>
                  </p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default JobsData;
