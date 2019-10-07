import React, {Component} from 'react';
import './Intro.less';

class Intro extends Component {
  render(){
    return (
      <div className="main-intro">
        <img className="image-main" alt="keyboard" src={require("../../images/helloWorldHeroCompressed.gif")}/>
        <div className="main-intro-about">
          <img alt="Katherine Marsh" src={require("../../images/profile.png")}/>
          <div className="about-text">
            <h2 className="about-name">I'm Katherine Marsh</h2>
            <div className="about-general">North Carolina State University '21. Computer science major.</div>
            <br></br>
            <div className="about-description">I love developing for social good and experimenting with new technology.</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;