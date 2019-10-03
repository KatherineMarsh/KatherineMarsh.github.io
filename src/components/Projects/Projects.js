import React, {Component} from 'react';
import './Projects.less';

class Projects extends Component {
  render(){
    return (
      <div className="projects clearfix"> 
        <h3>Projects</h3>
        <div class="project-one">
          <a target="_blank" rel="noopener noreferrer" href="http://trackcast.herokuapp.com/">
            <img className="image-project" alt="Katherine Marsh" src={require("../../images/trackcast.png")}/>
          </a>
          <div className="project-title">Trackcast</div>
          <div className="project-description">Web app built with Python Flask, HTML5/CSS, JavaScript, and gPodder Podcase API.</div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/katherinemarsh/TrackCast">Source Code</a>
        </div>
        <div class="project-two">
          hooo
        </div>
        <div class="project-three">
          <img className="image-project" alt="Katherine Marsh" src={require("../../images/iTrust2.PNG")}/>
          <div className="project-title">iTrust2 - Hospital Management System</div>
          <div className="project-description">Software Engineering Course Project. Built with AngularJS, Java, Spring, Hibernate, Cucumber, Selenium, HTML/CSS</div>
          <div>Source Code Private due to class restrictions</div>
        </div>
      </div>
    )
  }
}

export default Projects;