import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <AppBar
                showMenuIconButton={false}
                title="Enter your general information"
                style={{
                  background:
                    "linear-gradient(-45deg, #0f2027, #203a43, #2c5364)",
                  fontFamily: "Cairo, sans-serif"
                }}
              />
              <div className="form-container">
                <TextField
                  id="outlined-basic"
                  label="First name"
                  variant="outlined"
                  helperText="Enter your first name"
                  onChange={handleChange("firstName")}
                  defaultValue={values.firstName}
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                  helperText="Enter your last name"
                  onChange={handleChange("lastName")}
                  defaultValue={values.lastName}
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  helperText="Enter your email"
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                  required
                  validation="true"
                  type="email"
                />
                <Button
                  variant="outlined"
                  color="primary"
                  label="Continue"
                  onClick={this.continue}
                >
                  Continue
                </Button>
              </div>
            </React.Fragment>
          </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;
