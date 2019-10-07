import React, {Component} from 'react';
import './ProjectGrid.less';

export const ProjectGrid = (props) =>
  <div className="projects">
    {props.projects.map((project, i) => <Project key={i} project={project} {...props}/>)}
  </div>

class Project extends Component {
  render() {
    const {project} = this.props
    const link = project.link
    return (
      <div className="project-item">
        <div className="project-title">{project.title}</div>
        <img alt={project.title} src={project.imgSrc}/>
        <div className="project-desc">{project.about}</div>
        {link && 
          <div className="project-link">
            <a target="_blank" rel="noopener noreferrer" href={project.link}>Website</a>
            <a target="_blank" rel="noopener noreferrer" href={project.sourceCodeUrl}>Source Code</a>
          </div>
        }
        {!link &&
          <div className="project-link">
            Source unavailable due to NC State Academic Integrity.
        </div>        
        }
      </div>
    )
  }
}