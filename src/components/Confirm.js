import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from 'material-ui/List';
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';

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
               phoneNumber,
               message
             }
           } = this.props;
           return (
             <MuiThemeProvider>
               <React.Fragment>
                 <AppBar showMenuIconButton={false}
                   style={{ background: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)', fontFamily: 'Cairo, sans-serif' }} title="Confirm Data" />
                 <div className="form-container-confirm">
                 <List>
                   <ListItem
                     primaryText="Your first name"
                     secondaryText={firstName}
                   />
                    <Divider />
                   <ListItem primaryText="Your last name" secondaryText={lastName} />
                    <Divider />
                   <ListItem primaryText="Your email address" secondaryText={email} />
                     <Divider />
                   <ListItem
                     primaryText="Occupation / work"
                     secondaryText={occupation}
                   />
                     <Divider />
                   <ListItem primaryText="Your residential area" secondaryText={city} />
                     <Divider />
                   <ListItem
                     primaryText="Phone number"
                     secondaryText={phoneNumber}
                   />
                     <Divider />
                     <ListItem className="custom-list-item" primaryText="Your message" secondaryText={message} />
                 </List>
                 <br />
                   <Button
                     variant="outlined"
                     color="primary"
                     label="Continue"
                     onClick={this.continue}
                   >
                     Continue
                    </Button>
                 <Button
                   variant="outlined"
                   color="secondary"
                   label="Back"
                   onClick={this.back}
                   className="back-button"
                 >
                   Back
                    </Button>
                    </div>
               </React.Fragment>
             </MuiThemeProvider>
           );
         }
       }

export default FormUserDetails;
