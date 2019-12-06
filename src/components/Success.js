import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import MailSuccess from "./mailsuccess";
import Button from "@material-ui/core/Button";

export class Success extends Component {
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
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar showMenuIconButton={false}
                        style={{ background: 'linear-gradient(-45deg, #0f2027, #203a43, #2c5364)', fontFamily: 'Cairo, sans-serif' }} title="Success" />
                    <div className="form-container-success">
                        <h1>Thank you for contacting Sinthaesia</h1>
                        <MailSuccess />
                        <h3>Sinthaesia will contact you on the email address you provided as soon as possible.</h3>
                        <Button
                            variant="outlined"
                            color="primary"
                            label="Back"
                            onClick={event => window.location.href = '/'}
                            className="back-button"
                        >
                            Back to homepage
                    </Button>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;
