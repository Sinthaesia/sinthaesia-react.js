import React from 'react';
import "./App.scss";
import { Layout, Header, Navigation, Content, Drawer } from "react-mdl";
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Sinthaesia" href="/" scroll>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About me</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Sinthaesia" className="mobile_nav_color">
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About me</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
