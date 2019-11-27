import React, { Component } from "react";
import "../App.scss";
import Colors from './variables';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

// function Projects() {
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
    return (
      <div className="projects-grid">
        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
          <CardTitle style={{ color: Colors.orange, height: '176px', background: 'url(https://i.udemycdn.com/course/750x422/792484_cc98_3.jpg) center / cover' }}>Project one</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam vel erat mollis sodales. Sed mauris nulla, commodo eu dapibus vitae, mattis vel tortor.</CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored ripple raised accent className="html__bg" style={{ fontWeight: 'bold', color: Colors.grey }}>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: Colors.white}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
          <CardTitle style={{ color: Colors.orange, height: '176px', background: 'url(https://i.udemycdn.com/course/750x422/792484_cc98_3.jpg) center / cover' }}>Project two</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam vel erat mollis sodales. Sed mauris nulla, commodo eu dapibus vitae, mattis vel tortor.</CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored ripple raised accent className="html__bg" style={{ fontWeight: 'bold', color: Colors.grey }}>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: Colors.white}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
          <CardTitle style={{ color: Colors.orange, height: '176px', background: 'url(https://i.udemycdn.com/course/750x422/792484_cc98_3.jpg) center / cover' }}>Project three</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam vel erat mollis sodales. Sed mauris nulla, commodo eu dapibus vitae, mattis vel tortor.</CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored ripple raised accent className="html__bg" style={{ fontWeight: 'bold', color: Colors.grey }}>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: Colors.white}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    } else if(this.state.activeTab === 1){
    return(
      <div className="projects-grid-2">
        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
          <CardTitle style={{ color: '#c8d6f7', height: '176px', background: 'url(https://i.udemycdn.com/course/750x422/576054_7e88_6.jpg) center / cover' }}>Project one</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam vel erat mollis sodales. Sed mauris nulla, commodo eu dapibus vitae, mattis vel tortor.</CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored ripple raised accent className="wp__bg" style={{ fontWeight: 'bold', color: Colors.grey }}>Live Demo</Button>          </CardActions>
          <CardMenu style={{ color: Colors.white}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
          <CardTitle style={{ color: '#c8d6f7', height: '176px', background: 'url(https://i.udemycdn.com/course/750x422/576054_7e88_6.jpg) center / cover' }}>Project two</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam vel erat mollis sodales. Sed mauris nulla, commodo eu dapibus vitae, mattis vel tortor.</CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored ripple raised accent className="wp__bg" style={{ fontWeight: 'bold', color: Colors.grey }}>Live Demo</Button>          </CardActions>
          <CardMenu style={{ color: Colors.white}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    )
    } else if(this.state.activeTab === 2){
    return(
      <div className="projects-grid">
        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
          <CardTitle style={{ color: Colors.react, height: '176px', background: 'url(https://miro.medium.com/max/3600/1*Xt3l-_54wuxdsHpiolGP3g.jpeg) center / cover' }}>Project one</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam vel erat mollis sodales. Sed mauris nulla, commodo eu dapibus vitae, mattis vel tortor.</CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button cripple raised accent className="react__bg" style={{ fontWeight: 'bold', color: Colors.darklight }}>Live Demo</Button>          </CardActions>
          <CardMenu style={{color: Colors.white}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    } else if(this.state.activeTab === 3){
    return(
      <div className="projects-grid">
        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
          <CardTitle style={{ color: Colors.dimgray, height: '176px', background: 'url(https://i.imgur.com/I08uxii.png) center / cover' }}>Logo design</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam vel erat mollis sodales. Sed mauris nulla, commodo eu dapibus vitae, mattis vel tortor.</CardText>
          <CardActions border>
            <Button colored>IMGUR</Button>
            <Button ripple raised accent className="gd__bg" style={{ fontWeight: 'bold', color: Colors.dgrey }}>Live Demo</Button>          </CardActions>
          <CardMenu style={{color: Colors.white}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
          <CardTitle style={{ color: Colors.dimgray, height: '176px', background: 'url(https://i.imgur.com/R1dEESs.jpg) center / cover' }}>Brochure development</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam vel erat mollis sodales. Sed mauris nulla, commodo eu dapibus vitae, mattis vel tortor.</CardText>
          <CardActions border>
            <Button colored>IMGUR</Button>
            <Button ripple raised accent className="gd__bg" style={{ fontWeight: 'bold', color: Colors.dgrey }}>Live Demo</Button>          </CardActions>
          <CardMenu style={{ color: Colors.white}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    )
    }
  }

  render() {
    return(
    <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        <Tab>HTML/CSS</Tab>
        <Tab>Wordpress</Tab>
        <Tab>React</Tab>
        <Tab>Graphical design</Tab>
      </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
    </div>
    );
  }
};

export default Projects;
