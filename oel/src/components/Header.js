import React, { Component } from "react";
export class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <h3
              style={{
                color: "White",
                fontFamily: "Tahoma",
                marginLeft: "20px",
              }}
            >
              sPACULUS
            </h3>
          </li>
          <li>
            <a classNameName="Company" href="Profile.html">
              Company
            </a>
          </li>
          <li>
            <a href="Technology.html">Forms</a>
          </li>
          <li>
            <a href="Solutions.html">Cars</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;
