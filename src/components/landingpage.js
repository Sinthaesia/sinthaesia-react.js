import React from "react";
import { Grid, Cell } from 'react-mdl';
import Avatar from "./ava-ph.png";

function Landingpage() {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src={Avatar} alt="Avatar" className="avatar-img" />

          <div className="banner-text">
            <h1>Webdeveloper</h1>
            <hr />
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
                <i class="fab fa-github" />
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
    </div>
  );
}

export default Landingpage;
