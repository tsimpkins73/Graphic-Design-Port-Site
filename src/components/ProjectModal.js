'use strict';
import React from 'react';
import Carousel from './Carousel'
import '../css/index.css'

export default class ProjectModal extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
                projectToView: {},
           };;

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
          projectToView: nextProps.projectToView,
                    });
         }

    openProjectModal = (project) => {
       
         this.props. openProjectModal = (project);
       };

       closeButton = () => {
        console.log('Close');
        this.props.closeButton();
    };

  render(){

    
    let projectToView = this.state.projectToView;
    console.log(projectToView);
  return (
    <section className={(this.props.isActive) ? 'projectModal' : 'hidden'}> 
             <div class="PortPiece1">
            <h2>{projectToView.title}</h2>
            <img class="modalProject-pic" src={projectToView.img} alt={projectToView.title} ></img>
            <p>{projectToView.description}
            </p>
            <a href={projectToView.liveLink} class="portfolioLinks"
               target="_blank">View Live Project</a>
            <a href={projectToView.repoLink} class="portfolioLinks"
                target="_blank">View Project Repo</a> 
                <button className="portfolioLinks" id="close" name="close" onClick={() => this.closeButton()} value="close">Close</button>
                    
         </div>
 </section>
   );
  }
}


