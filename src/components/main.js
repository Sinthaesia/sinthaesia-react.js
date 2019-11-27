import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; // eslint-disable-next-line
import gsap from "gsap";

import Landingpage from "./landingpage";
import Contact from "./contact";
import About from "./aboutme";
import Projects from "./project";
import Resume from "./resume";
import ContactNew from "./contactnew";


const Main = () => (
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contactnew" component={ContactNew} />
      </Switch>
);

export default Main;