import React from 'react';
import "./App.scss";
import { Layout, Header, Navigation, Content, Drawer, Footer, FooterSection, FooterLinkList } from "react-mdl";
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout fixedHeader>
        <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: '#96c3ce'}} to="/">Sinthaesia</Link>} fixed="true">
          <Navigation className="mdl-layout--large-screen-only">
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About me</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contactnew">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Sinthaesia" className="mdl-layout--small-screen-only mobile_nav_color">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About me</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contactnew">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
          <Footer size="mini">
            <FooterSection type="left" logo={<Link className="footer-logo" to="/">Sinthaesia</Link>} fixed="true">
              <FooterLinkList className="footer-section">
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About me</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contactnew">Contact</Link>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Content>
      </Layout>

    </div>
  );
}

export default App;
