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
            <div className="about-general">Junior majoring in computer science at NC State.</div>
            <br></br>
            <div className="about-description">Loves developing for social good and experimenting with new tech.</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;