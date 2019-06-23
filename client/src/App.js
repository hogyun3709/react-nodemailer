import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Notification from "react-notify-toast";

import Landing from "./components/Landing";
import Confirm from "./components/Confirm";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer/Footer";
import { API_URL } from "./config";
import "./App.css";

export default class App extends Component {
  /* Check server is running before the user interact with app */
  state = {
    loading: true
  };

  /* When using free hosting/deploying services, let the server keep running even no one use the application. */
  componentDidMount = () => {
    fetch(`${API_URL}/wake-up`)
      .then(res => res.json())
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(err => console.log(err));
  };

  render = () => {
    /* Check out the server is running or not. If server runs, the landing component will be return instead a big spinner. */
    const content = () => {
      if (this.state.loading) {
        return <Spinner size="10x" spinning="spinning" />;
      }

      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/confirm/:id" component={Confirm} />
            <Route exact path="/" component={Landing} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      );
    };

    /* Container uses flex box */
    /* The dom holds messages untill notifi.show is called*/
    return (
      <div className="container fadein">
        <Notification />
        <main>{content()}</main>
        <Footer />
      </div>
    );
  };
}
