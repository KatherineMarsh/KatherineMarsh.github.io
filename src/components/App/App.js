import React, {Component} from 'react';
import {Nav} from '../Nav/Nav';
import Intro from '../Intro/Intro';
import {ProjectGrid} from '../Projects/ProjectGrid';
import {navData} from '../../data';
import {projectData} from '../../data';

import './reset.css';

class App extends Component {
  state = {
    menuItems: navData,
    projects: projectData
  }

  render(){
    const {menuItems} = this.state
    return (
      <React.Fragment>
          <Nav 
            menuItems={menuItems}/>
          <Intro />
          <ProjectGrid
            projects={projectData}/>

      </React.Fragment>
    )
  }
}
export default App;