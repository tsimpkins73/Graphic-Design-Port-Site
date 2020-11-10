'use strict';
import React from 'react';
import '../../css/index.css'

export default class ImageSlide extends React.Component {
  
   
   
  render(){
      const styles = {
          backgroundSize: 'cover',
          backgroundPosition: 'center'
      };
      let project = this.props.project;
      return (
          <div className="image-slide" style={styles}>
              <h2 className="projectTitle">{project.title}</h2>
        <img class="project-image" src={project.img} alt="Web Dev Toolkit App Project" />
        <div className="projectDescription">
       <p>{project.description}</p>
       </div>
       <div className="projectButtons">
        <a href={project.liveLink} class="portfolioLinks"
           target="_blank" rel="noopener noreferrer">View Live Project</a>
        <a href={project.repoLink} class="portfolioLinks"
            target="_blank" rel="noopener noreferrer">View Project Repo</a>
          </div>
          </div>
      );
  
  }
}


