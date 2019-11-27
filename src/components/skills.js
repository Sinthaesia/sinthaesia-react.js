import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component{
    render(){
        return (
          <Grid>
            <Cell col={12} style={{display: "flex"}}>
              <Cell col={4}>
                <div className="skills-div">{this.props.skill}</div>
              </Cell>
              <Cell col={8}>
                <ProgressBar
                  className="skills-bar"
                  progress={this.props.progress}
                  buffer={this.props.buffer}
                />
              </Cell>
            </Cell>
          </Grid>
        );
    }
}

export default Skills;