import React, {Component} from 'react';
import './Intro.less';

class Intro extends Component {
  render(){
    return (
      <div className="main-intro" id="intro">
        <img className="image-main" alt="keyboard" src={require("../../images/helloWorldHeroCompressed.gif")}/>
        <div className="main-intro-about">
          <img alt="Katherine Marsh" src={require("../../images/profile.png")}/>
          <div className="about-text">
            <h2 className="about-name">Katherine Marsh</h2>
            <div className="about-general">Computer science - North Carolina State University '21</div>
            <br></br>

            <div className="about-description">I'm a junior majoring in computer science with a passion for development, design, and experimenting with new tech.
             I have experience in e-commerce web development, as well as Android app development.
             </div>

            <div className="about-description">View my resume <a href="https://drive.google.com/file/d/1p5naGRABq4qJkt0ITFRp3fSo4_qyqftv/view?usp=sharing" 
              target="_blank" rel="noopener noreferrer">here</a>.
            </div>

            <div className="about-description">Contact me at <a href="mailto:kwmarsh@ncsu.edu" 
              target="_blank" rel="noopener noreferrer">kwmarsh@ncsu.edu</a> if you would like references or are interested in sponsoring 
              Women in Computer Science at NC State.
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Intro;