import React, {Component} from 'react';
import './Nav.less';

class Nav extends Component {

  render(){
    return (
      <div className="Nav">
        <div class="header clearfix">
        <nav class="top-menu flex">
          <div>About</div>
          <div>Experience</div>
          <div>Projects</div>
          <div>Involvement</div>
          <div>Books</div>
        </nav>
        <div class="hamburger-menu">
          <i class="fa fa-bars"></i>
        </div>
      </div>
      <div className="intro clearfix">
        <img className="image-main" alt="keyboard" src={require("../../images/helloWorldHeroCompressed.gif")}/>
        <div className="profile">
          <img className="image-profile" alt="Katherine Marsh" src={require("../../images/profile.jpeg")}/>
          <h2>I'm Katherine</h2>
          <div className="profile-text">Computer Science Junior</div>
          <div className="profile-text">North Carolina State University</div>
        </div>
      </div>
    </div>
    )
  }
}

export default Nav;