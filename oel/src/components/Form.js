import React, { Component } from "react";
export class Form extends Component {
  render() {
    return (
      <div class="col-md-6 main">
        <center>
          <form  method="post" style={{ width: "350px" }}>
            <h1 style={{ width: "350px" }}> Car Details </h1>

            <input
              class="box"
              type="text"
              name="name"
              id="name"
              placeholder="Car Name"
              required
            />
            <br />

            <input
              class="box"
              type="text"
              name="Model"
              id="Model"
              placeholder="Car Model"
              required
            />
            <br />

            <input
              class="box"
              type="number"
              name="number"
              id="CarNumber"
              placeholder="Car Number "
              required
            />
            <br />
            <input
              class="box"
              type="text"
              name="Color"
              id="Color"
              placeholder="Car Color"
              required
            />
            <br />
            <br />
            <input
              type="submit"
              id="submitDetails"
              name="submitDetails"
              value="Submit"
            />
            <br />
          </form>
        </center>
      </div>
    );
  }
}
export default Form;
