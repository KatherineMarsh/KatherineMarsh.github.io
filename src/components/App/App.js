import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects';
import './App.less';

class App extends Component {

  render(){
    return (
      <React.Fragment>
        <Nav/>
        <Projects/>
      </React.Fragment>
    )
  }
}
export default App;