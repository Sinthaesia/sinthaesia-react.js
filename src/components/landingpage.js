import React from "react";
import { Grid, Cell } from 'react-mdl';
import Avatar from "./ava-ph.png";// eslint-disable-next-line
import code from "./code.svg";
import globe from "./globe.svg";// eslint-disable-next-line
import welcome from "./welcome.svg";
import dreamer from "./dreamer.svg";// eslint-disable-next-line
import gsap from "gsap";

function Landingpage() {
  return (
    <div style={{ width: "100%", height:"100%" }}>
      <Grid className="landing-grid">
        <Cell col={5} className="hero">
          <img
            src={ dreamer }
            alt="welcome"
            className="hacker"
          />
        </Cell>
        <Cell col={7} className="grid-display">
          <img src={Avatar} alt="Avatar" className="avatar-img" />
          <div className="banner-text">
            <h1>Sinthaesia</h1>
            <h3>Webdeveloper</h3>
            {/* <hr /> */}
            <p>
              <span style={{ color: "#F7652D" }}>HTML</span>/
              <span style={{ color: "#F7652D" }}>SCSS</span> &#8226;
              {/* OBSOLETE  FIX LATER*/}
              <span style={{ color: "#E7A328" }}> jQuery</span> &#8226;
              <span style={{ color: "#21759b" }}> WordPress</span> &#8226;
              <span style={{ color: "#60DCFA" }}> React</span>
            </p>
            <div className="social-icons">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/daan-aesseloos-20bb39181/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Tranquillia"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/ObviouslyMindsetting"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
      <Grid className="sub-hero__1">
        <Cell col={6}></Cell>
        <Cell col={6}></Cell>
        <div className="overlap-content">
          <img 
            src={globe}
            alt="globe"
            className="globe"
          />
          <h1>This is a test field</h1>
          <hr />
          <p style={{ textAlign: 'left' }}>More card details go here</p>
        </div>
      </Grid>
    </div>
  );
}

export default Landingpage;
