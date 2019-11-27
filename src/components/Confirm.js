import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from 'material-ui/List';
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
         continue = e => {
           e.preventDefault();
           // PROCESS FORM //
           this.props.nextStep();
         };

         back = e => {
           e.preventDefault();
           this.props.prevStep();
         };

         render() {
           const {
             values: {
               firstName,
               lastName,
               email,
               occupation,
               city,
               phoneNumber
             }
           } = this.props;
           return (
             <MuiThemeProvider>
               <React.Fragment>
                 <AppBar showMenuIconButton={false}
                   style={{ background: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)', fontFamily: 'Cairo, sans-serif' }} title="Confirm Data" />
                 <List>
                   <ListItem
                     primaryText="First name"
                     secondaryText={firstName}
                   />
                   <ListItem primaryText="Last name" secondaryText={lastName} />
                   <ListItem primaryText="Email" secondaryText={email} />
                   <ListItem
                     primaryText="Occupation / work"
                     secondaryText={occupation}
                   />
                   <ListItem primaryText="City" secondaryText={city} />
                   <ListItem
                     primaryText="Phone number"
                     secondaryText={phoneNumber}
                   />
                 </List>
                 <br />
                 <RaisedButton
                   label="Back"
                   primary={false}
                   style={styles.button}
                   onClick={this.back}
                 />
                 <RaisedButton
                   label="Confirm &amp; continue."
                   primary={true}
                   style={styles.button}
                   onClick={this.continue}
                 />
               </React.Fragment>
             </MuiThemeProvider>
           );
         }
       }

const styles = {
  button: {
    margin: "15px",
    background: "#fe52f1"
  }
};

export default FormUserDetails;
