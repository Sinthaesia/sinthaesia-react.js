import React, { Component } from "react";
import { UserForm } from './UserForm';
import { Grid, Cell } from 'react-mdl';
import Icon from './icon';

export class ContactNew extends Component {
  render(){
    return (
      <Grid className="contact-grid">
        <Cell col={6} offsetDesktop={1} className="svg-container">
          <Icon />
        </Cell>
        <Cell col={5} className="contact-right">
          <div className="application-bar">
            <UserForm />
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default ContactNew;
