import React, { Component } from "react";
import "../styling/globals.scss";
import "../styling/details.scss";
import IconApi from "../images/icon-api.svg";
import IconBudgeting from "../images/icon-budgeting.svg";
import Online from "../images/icon-online.svg";
import Onboarding from "../images/icon-onboarding.svg";

class Details extends Component {
  render() {
    return (
      <section id="details" className="flex-sb p-all">
        <div id="details-text" className="p-p-tb">
          <h1>Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div id="details-container" className="flex-sb">
          <div className="cards">
            <img src={Online} alt="Online" />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>

          <div className="cards">
            <img src={IconBudgeting} alt="Budgeting" />
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="cards">
            <img src={Onboarding} alt="onBoarding" />
            <h3>Fast Onboarding</h3>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>

          <div className="cards">
            <img src={IconApi} alt="Api" />
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
