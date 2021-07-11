import React, { Component } from "react";
import { FaMapMarker, FaEnvelope, FaMobile } from "react-icons/fa";

import {
  portfolioEmail,
  portfolioPhone,
  portfolioAddress,
  googleMapAddress,
} from "./constants/constants.component";

class Address extends Component {
  render() {
    return (
      <>
        <p>
          <FaMapMarker /> <a href={googleMapAddress}>{portfolioAddress}</a>
        </p>
        <p>
          <FaEnvelope /> <a href={portfolioEmail}>{portfolioEmail}</a>
        </p>
        <p>
          <FaMobile /> <a href={"tel:" + portfolioPhone}>{portfolioPhone}</a>
        </p>
      </>
    );
  }
}

export default Address;
