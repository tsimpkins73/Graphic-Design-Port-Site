'use strict';
import React from 'react';
import '../css/index.css'
import '../css/projects.css'
import ProjectPreview from './ProjectPreview';
import ProjectModal from './ProjectModal';

export default class Projects extends React.Component {
  
  render(){

    let openProjectModal = this.props.openProjectModal;
      return (
            <section className='Projects' id="section2" >
               <h2 className="WEHeadline">Projects</h2>
              <div className={(this.props.isProjectsBlurred ? 'ProjectsBlurred' : 'projectPreviews')}>
      {this.props.projects.map(function (project) {
                return <div className="projectCategory">
                  <h2 className="categoryHeadline">{project.category}</h2>
                  <div className="projectCategoryDisplay">
                    {project.designs.map(function (design) {
                     return <div className="projectPreviewContainer">
                       <ProjectPreview project={design} openProjectModal={openProjectModal} />
                       </div>
                    })}          
                    </div>      
                    </div>
            })}
            </div>
               <ProjectModal isActive={this.props.isProjectModalActive}
               closeButton={this.props.closeButton}
            projects={this.props.projects}
            projectToView ={this.props.projectToView} />
         {/* <Carousel projects={this.props.projects} /> */}
 </section>
   );
  }
}


