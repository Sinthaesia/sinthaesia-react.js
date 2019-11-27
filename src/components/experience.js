import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4
            style={{
              marginTop: "0px",
              borderBottom: "2px solid #E53167",
              display: "inline-block"
            }}
          >
            {this.props.jobName}
          </h4>
          <p>
            <h6 style={{ display: "inline-block", fontWeight: "bold" }}>
              Employer
            </h6>
            : &nbsp;{this.props.employer}
          </p>
          <p>Job description: {this.props.jobDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
