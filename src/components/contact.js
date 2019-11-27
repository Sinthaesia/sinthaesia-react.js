import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render(){
    return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6} className="optimize-position">
          <h2>Daan Aesseloos</h2>
          <img 
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{ height: '250px' }}
          />
          <p style={{ width: '75%', margin:'auto', paddingTop: '15px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus, elit nec rutrum vulputate, turpis elit tincidunt lorem, sollicitudin vestibulum justo ante non enim.</p>
        </Cell>
        <Cell col={6} className="optimize-position">
          <h2 className="underline-subject">Contact me</h2>
          <hr className="rainbow2" />
          <div className="contact-list">
            <List>
              <ListItem style={{ marginTop: '2rem' }}>
                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Poppins', lineHeight: '25px' }}>
                  <i className="fas fa-phone-square" aria-hidden="true" />
                  <span style={{ fontSize: '30px', fontWeight: 'bold' }}>(+32)-477 12 23 34</span>
                </ListItemContent>
              </ListItem>
              <ListItem style={{ marginTop: '2rem' }}>
                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Poppins', lineHeight: '25px' }}>
                    <i className="fas fa-envelope" aria-hidden="true" />
                  <span style={{ fontSize: '30px', fontWeight: 'bold' }}>hello@sinthaesia.com</span>
                </ListItemContent>
              </ListItem>
              <ListItem style={{ marginTop: '2rem' }}>
                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Poppins', lineHeight: '25px' }}>
                    <i className="fab fa-discord" aria-hidden="true" />
                  <span style={{ fontSize: '30px', fontWeight: 'bold' }}>Mind#7452</span>
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
    )
  }
}

export default Contact;
