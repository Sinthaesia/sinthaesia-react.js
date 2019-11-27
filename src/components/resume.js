import React from "react";
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from "./skills";

function Resume() {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://www.shareicon.net/data/512x512/2016/01/19/705652_man_512x512.png"
              alt="Avatar"
              style={{ height: "200px" }}
            />
          </div>
          <h2 style={{ paddinTop: "30px" }}>Daan Aesseloos</h2>
          <h4 style={{ color: "grey" }}>Developer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>LOREM IPSUM FOR THE TIME BEING</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Address</h5>
          <p>1 Hackerway Way Menlo Park, 94025</p>
          <h5>Phone</h5>
          <p>(+32) 477 12 23 34</p>
          <h5>Email</h5>
          <p>hello@sinthaesia.com</p>
          <h5>Website</h5>
          <p>https://sinthaesia.com</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        </Cell>
        <Cell
          className="resume-right-col"
          col={8}
          style={{ maxHeight: "800px", overflowX: "scroll" }}
        >
          <h2>Education history</h2>

          <Education startYear={2008} endYear={2012} schoolName="Placeholder" />

          <Education
            startYear={2012}
            endYear={2016}
            schoolName="Immaculata Tienen"
          />

          <Education
            startYear={2016}
            endYear={2018}
            schoolName="CVO Haasrode"
            schoolDescription="Webdesign &amp; webdevelopment"
          />

          <hr style={{ borderTop: "3px solid #E53167" }} />

          <h2>Experience</h2>

          <Experience
            startYear={2017}
            endYear="N/A"
            employer="Polytronics"
            jobName="Webdesigner"
            jobDescription="Webdesigner for Polytronics"
          />
          <Experience
            startYear={2018}
            endYear="N/A"
            employer="DesignLighting"
            jobName="WordPress development"
            jobDescription="Webdesigner &amp; webdeveloper for DesignLighting."
          />
          <Experience
            startYear={2018}
            endYear="N/A"
            employer="DesignLighting"
            jobName="Logo &amp; brochure developer"
            jobDescription="Design &amp; development of product catalogues and logo."
          />
          <Experience
            startYear={2019}
            endYear="N/A"
            employer="SmartIntercom"
            jobName="WordPress development"
            jobDescription="Company website production"
          />
          <hr style={{ borderTop: "3px solid #E53167" }} />
          <h2>Skills</h2>
          <Skills skill="HTML and CSS" progress={85} buffer={90} />
          <Skills skill="JavaScript" progress={65} buffer={75} />
          <Skills skill="WordPress" progress={70} buffer={85} />
        </Cell>
      </Grid>
    </div>
  );
}

export default Resume;