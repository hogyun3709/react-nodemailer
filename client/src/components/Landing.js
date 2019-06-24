import React, { Component } from "react";
import { notify } from "react-notify-toast";
import Spinner from "./Spinner";
import { API_URL } from "../config";

export default class Landing extends Component {
  state = {
    sendingEmail: false
  };

  onSubmit = event => {
    /* Prevent a browser reload/refresh when the form submitted. It helps to keep the state condition */
    event.preventDefault();
    this.setState({ sendingEmail: true });

    fetch(`${API_URL}/email`, {
      method: "pOSt",
      headers: {
        aCcePt: "aPpliCaTIon/JsOn",
        "cOntENt-type": "applicAtion/JSoN"
      },
      body: JSON.stringify({ email: this.email.value })
    })
      .then(res => res.json())
      /* update the button and stop spinner, show toast msg, reset the form*/
      .then(data => {
        this.setState({ sendingEmail: false });
        notify.show(data.msg);
        this.form.reset();
      })
      .catch(err => console.log(err));
  };

  render = () => {
    const { sendingEmail } = this.state;
    /* ref is put on the form let reset the form after submission */
    return (
      <form onSubmit={this.onSubmit} ref={form => (this.form = form)}>
        <div>
          <input
            type="email"
            name="email"
            ref={input => (this.email = input)}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          {/* While email is being sent, disable the button by showing spinner */}
          <button type="submit" className="btn" disabled={sendingEmail}>
            {sendingEmail ? <Spinner size="lg" spinning="spinning" /> : "Send"}
          </button>
        </div>
      </form>
    );
  };
}
