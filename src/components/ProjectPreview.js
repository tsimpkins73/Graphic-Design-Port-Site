'use strict';
import React from 'react';
import '../css/index.css'

export default class ProjectPreview extends React.Component {
  
    openProjectModal = (project) => {
      console.log(project);
         this.props.openProjectModal(project);
       };

  render(){

    
    let project =this.props.project;
  return (
        <section className="ProjectPreview">
             <div class="PortPiece1">
            <h2>{project.title}</h2>
            <img class="project-pic" src={`${process.env.PUBLIC_URL}/${project.img}`} alt={project.title} ></img>
            <p>{project.summary}
            </p>
            <button className= 'portfolioLinks' onClick={() =>this.openProjectModal(project)} name="open" value="View More">View More</button>

           {/*  <a href={project.liveLink} class="portfolioLinks"
               target="_blank">View Live Project</a>
            <a href={project.repoLink} class="portfolioLinks"
                target="_blank">View Project Repo</a> */}
         </div>
 </section>
   );
  }
}


