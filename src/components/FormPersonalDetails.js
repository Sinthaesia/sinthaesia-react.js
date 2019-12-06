import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormPersonalDetails extends Component {
         continue = e => {
           e.preventDefault();
           this.props.nextStep();
         };
         back = e => {
           e.preventDefault();
           this.props.prevStep();
         };


         render() {
           const { values, handleChange } = this.props;
           return (
             <MuiThemeProvider>
               <React.Fragment>
                 <AppBar 
                  showMenuIconButton={false}
                   style={{ background: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)',
                  fontFamily: 'Cairo, sans-serif' }} 
                  title="Enter your personal details" />
                  <div className="form-container">
                    <TextField
                      id="outlined basic"
                      label="Occupation"
                      variant="outlined"
                      helperText="What do you do for a living?"
                      onChange={handleChange("occupation")}
                      defaultValue={values.occupation}
                    />
                    <TextField
                      id="outlined basic"
                      label="City or province"
                      variant="outlined"
                      helperText="Where do you live?"
                      onChange={handleChange("city")}
                      defaultValue={values.city}
                    />
                    <TextField
                      id="outlined basic"
                      label="Phone or mobile number"
                      variant="outlined"
                      helperText="What's your phone number?"
                      onChange={handleChange("phoneNumber")}
                      defaultValue={values.phoneNumber}
                      required
                    />
                   <TextField
                     multiline
                     rows="4"
                     maxRows="7"
                     id="outlined basic"
                     label="Message"
                     variant="outlined"
                     helperText="Why are you contacting Sinthaesia?"
                     onChange={handleChange("message")}
                     defaultValue={values.message}
                     required
                   />
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

export default FormPersonalDetails;
