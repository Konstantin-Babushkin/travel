import React, { Component } from "react";
import logo from "./pic/travel.png";

class Nav extends Component {
  render() {
    return (
      <nav>
        <img src={logo} alt="logo" />
        <h3>My Travel</h3>
      </nav>
    );
  }
}

export default Nav;
