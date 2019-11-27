import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import "I:/reactsin/sinthaesia/src/App.scss";

export class UserForm extends Component {
         state = {
           step: 1,
           firstName: '',
           lastName: '',
           email: '',
           occupation: '',
           city: '',
           phoneNumber: ''
         }
         // Proceed to next step
         nextStep = () => {
           const { step } = this.state;
           this.setState({
             step: step + 1
           });
         }
         // Back to previous step
         prevStep = () => {
           const { step } = this.state;
           this.setState({
             step: step - 1
           });
         }
         // Handle fieldchange
         handleChange = input => e => {
             this.setState({ [input]: e.target.value });
         }
         render() {
            const { step } = this.state;
            const { firstName, lastName, email, occupation, city, phoneNumber } = this.state;
            const values = { firstName, lastName, email, occupation, city, phoneNumber } // eslint-disable-next-line
           switch (step) { 
                case 1:
                    return (
                        <FormUserDetails 
                            nextStep={ this.nextStep }
                            handleChange={ this.handleChange }
                            values={ values }
                        />
               ); 
                case 2: 
                    return (
                      <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                      />
               ); 
                case 3:
                    return (
                      <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                      />
               ); 
                case 4:
                    return <h1>Success</h1>
            }
         }
       }

export default UserForm;
