import React, { Component } from "react";
export class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          paddingBottom: "50px",
        }}
      >
        <center>
          <u style={{ color: "white" }}>
            <p
              style={{
                fontFamily: "Tahoma",
                fontSize: "30px",
                paddingTop: "50px",
              }}
            >
              sPACULUS
            </p>
          </u>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo saepe
            <br /> hic expedita sapiente explicabo, obcaecati maiores sunt sint,
            est, voluptatem asperiores ipsum reiciendis.
          </p>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="fa fa-facebook"
          ></a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="fa fa-youtube"
          ></a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="fa fa-twitter"
          ></a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="fa fa-instagram"
          ></a>

          <br />
        </center>
      </footer>
    );
  }
}
export default Footer;
