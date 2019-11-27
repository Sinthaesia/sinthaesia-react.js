import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

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
                 <AppBar showMenuIconButton={false}
                   style={{ background: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)', fontFamily: 'Cairo, sans-serif' }}title="Enter Personal Details" />
                 <TextField
                   hintText="Your occupation (not required)"
                   floatingLabelText="Occupation/job"
                   onChange={handleChange("occupation")}
                   defaultValue={values.occupation}
                 />
                 <br />
                 <TextField
                   hintText="Enter your city"
                   floatingLabelText="City / Province"
                   onChange={handleChange("city")}
                   defaultValue={values.city}
                 />
                 <br />
                 <TextField
                   hintText="Enter your phone number"
                   floatingLabelText="Phone / mobile number"
                   onChange={handleChange("phoneNumber")}
                   defaultValue={values.phoneNumber}
                 />
                 <br />
                 <RaisedButton
                   label="Back"
                   primary={false}
                   style={styles.button}
                   onClick={this.back}
                 />
                 <RaisedButton
                   label="Continue"
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

export default FormPersonalDetails;
