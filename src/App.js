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
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About me</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Sinthaesia" className="mobile_nav_color">
          <Navigation>
            <Link to="/">Home</Link>
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

          <Footer size="mini" style={{ display: "block" }}>
            <FooterSection type="bottom" logo="Sinthaesia">
              <FooterLinkList>
                <a href="#">Help</a>  /*  DEPRECATED  */
                <a href="#">Privacy &amp; Terms</a>  /* DEPRECATED  */
              </FooterLinkList>
            </FooterSection>
          </Footer>

    </div>

  );
}

export default App;
