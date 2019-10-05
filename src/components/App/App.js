import React, {Component} from 'react';
import {Nav} from '../Nav/Nav';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Books from '../Books/Books';
import {navData} from '../../data';
import './reset.css';

class App extends Component {
  state = {
    menuItems: navData
  }

  render(){
    const {menuItems} = this.state
    return (
      <React.Fragment>
          <Nav 
            menuItems={menuItems}/>
          <Intro />
      </React.Fragment>
    )
  }
}
export default App;