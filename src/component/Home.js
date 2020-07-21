import React, { useState } from "react";
import { ModalBody, ModalHeader, Modal, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JobSearch from "./JobSearch";
import { Link } from "react-router-dom";
import Register from "./RegisterUser";

function Home(props) {
  const [loginModal, setloginModal] = useState(false);
  const toggleLoginModal = () => setloginModal(!loginModal);
  const closeBtn = (
    <Button className="close" onClick={toggleLoginModal}>
      &times;
    </Button>
  );

  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid mt-0 mb-0">
        <div className="container pt-0">
          <p className="lead pt-0">Looking For Part Times ?</p>
          <h1 className="display-3">Now Hire or Get Hired.</h1>
          {/* <p className="lead">Looking For Part Times ?</p> */}
          <hr className="my-2" />
          <p>More info</p>
          <p className="lead">
            <span className="btn btn-primary btn-lg" onClick={toggleLoginModal}>
              Register Now
            </span>
            <Modal isOpen={loginModal} toggle={toggleLoginModal}>
              <ModalHeader
                toggle={toggleLoginModal}
                close={closeBtn}
                gin
                className="modalHeader"
              >
                <h4 className="welcome">Hunt | Part-Time</h4>
                <h5>Sign up for free !</h5>
              </ModalHeader>
              <ModalBody>
                <Register addUser={props.addUser} />
              </ModalBody>
            </Modal>
          </p>
        </div>

        {/* <div className="row">
        <div className="col-md-5 mt-5 mb-4">
          <h2>Hire. Get Hired.</h2>
        </div>
      </div> */}
      </div>

      <div className="container-fluid strip-one">
        <p className="lead">
          <span className="pr-1">
            Tired of too many steps to apply for a job?{" "}
          </span>
          <span className="pr-1">Now Apply Hassle Free. </span>
          <span>We Don't Ask Much! </span>
        </p>
      </div>

      <div className="container-fluid home-container">
        <p className="lead">
          Tired of too many steps to apply for a job? Now Apply Hassle Free. We
          Don't Ask Much!
        </p>
        <div className="SearchBarDiv d-flex justify-content-center">
          <JobSearch
            onUserInputText={""}
            placeholder="Part-time title eg: Cashier"
          />
          <span className="SearchButton">
            <i class="fa fa-search btn btn-primary" aria-hidden="true"></i>
          </span>
        </div>

        <div className="SearchBarDiv d-flex justify-content-center">
          <JobSearch
            onUserInputText={""}
            placeholder="Location radius eg: 1 km"
          />
          <span className="SearchButton">
            <i class="fa fa-search btn btn-primary" aria-hidden="true"></i>
          </span>
        </div>

        <div className="SearchBarDiv d-flex justify-content-center">
          <JobSearch onUserInputText={""} placeholder="Salary eg: $50000 pm" />
          <span className="SearchButton">
            <i class="fa fa-search btn btn-primary" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

// function Home() {
//   return (
//     <div className="container-fluid home-container">
//       <div className="row">
//         <div className="col mt-5 mb-4">
//           <h3 className="what">
//             What’s In Your <span className="wallet">Wallet</span>{" "}
//           </h3>
//           <h5 className="mt-4 mb-5">
//             <span className="all-in-one ml-5">PLANNER : All-In-One . . .</span>{" "}
//             let's plan budget | future | tasks
//           </h5>

//           <span className="opacity">
//             <span className="opacity-2">
//               <img
//                 src="https://cdn4.iconfinder.com/data/icons/accounting-13/64/tax-interest-money-cash-investment-512.png"
//                 width="230"
//                 alt="cash-icon"
//                 className="cash-icon mr-3"
//               />
//             </span>
//           </span>
//         </div>
//       </div>
//       <div
//         className="row"
//         style={{
//           marginTop: 70,
//           alignItems: "center",
//           marginLeft: 100,
//           marginRight: 100,
//         }}
//       >
//         <div className="col-12 col-lg-4 mb-2 box">
//           <Card className="card" style={{ backgroundColor: "#29aab6" }}>
//             <CardImg
//               src="https://cdn.mydollarplan.com/wp-content/uploads/2011/02/Pie-Chart.jpg"
//               alt="Expenses"
//               className="align-self-center homeImg"
//             />
//             <Link to="/budget" className="nav-link card-footer mt-1 mb-1">
//               <i className="fa fa-money fa-lg" /> {"  "} Budget
//             </Link>
//           </Card>
//         </div>
//         <div className="col-12 col-lg-4 mb-2 box">
//           <Card className="card" style={{ backgroundColor: "#107983" }}>
//             <CardImg
//               src="https://media.ycharts.com/charts/d10a7141799f6642aaca8dbde7faa5c3.png"
//               alt="Portfolio"
//               className="align-self-center homeImg"
//             />
//             <Link to="/portfolio" className="nav-link card-footer mt-1 mb-1">
//               <i className="fa fa-eye fa-lg" /> {"  "}
//               WatchList
//             </Link>
//           </Card>
//         </div>
//         <div className="col-12 col-lg-4 mb-lg-2 mb-5 box">
//           <Card className="card" style={{ backgroundColor: "#004d79" }}>
//             <CardImg
//               src="https://d12y7sg0iam4lc.cloudfront.net/s/img/marketing/top-todo-app/to-do-list.png"
//               alt="To-do"
//               className="align-self-center homeImg"
//             />
//             <Link to="/todo" className="nav-link card-footer mt-1 mb-1">
//               <i className="fa fa-list fa-lg" /> {"  "}
//               My Tasks
//             </Link>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Home;
