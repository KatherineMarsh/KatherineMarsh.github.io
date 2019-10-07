import React, {Component} from 'react';
import './ProjectGrid.less';

export const ProjectGrid = (props) =>
  <div className="projects">
    {props.projects.map((project, i) => <Project key={i} project={project} {...props}/>)}
  </div>

class Project extends Component {
  render() {
    const {project} = this.props
    var imgSrc = project.imgSrc
    return (
      <div className="project-item">
        <div className="project-title">{project.title}</div>
        <a target="_blank" rel="noopener noreferrer" href={project.link}>
          <img alt={project.title} src={require(imgSrc)}/>
        </a>
        <div className="project-desc">{project.about}</div>
        <a target="_blank" rel="noopener noreferrer" href={project.sourceCodeUrl}>Source Code</a>
      </div>
    )
  }
}