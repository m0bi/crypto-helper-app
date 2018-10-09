import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import CardsPage from "./pages/CardsPage";
import TablesPage from "./pages/TablesPage";

//import SignUpPage from "./pages/SignUpPage";
//import SignInPage from "./pages/SignInPage";

//import * as routes from "./constants/routes";
//import { firebase } from './firebase';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     // authUser: null
    };
  }

  // componentDidMount() {
  //   //console.log(firebase);
  //   //firebase.auth.onAuthStateChanged(authUser => {
  //     //console.log(authUser);
  //     // if(authUser === null){
  //     //   console.log("I'm null!");
  //     //   this.setState({ authUser: null })
  //     // } else if(authUser !== null){
  //     //   console.log("I'm not null!");
  //     //   this.setState({ authUser })
  //     // }
  //     {
  //     authUser
  //       ? this.setState(() => ({ authUser }))
  //       : this.setState(() => ({ authUser: null }));
  //   }
  //   });
  // }

  render() {
    return (
      <Router>
        <div className="appContainer">
          {/* {console.log(firebase)} */}
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/cards" component={CardsPage} />
          <Route exact path="/tables" component={TablesPage} />
          {/* <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/signin" component={SignInPage} /> */}
          {/* <Route component={NoMatch} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
