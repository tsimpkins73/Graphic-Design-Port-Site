"use strict";
import React from "react";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ProjectModal from "./components/ProjectModal";
import Projects from "./components/Projects";
import WorkHistory from "./components/WorkHistory";
import "./css/index.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAboutMeActive: true,
      isProjectsActive: false,
      isProjectsBlurred: false,
      isProjectModalActive: false,
      isWorkHistoryActive: false,
      isContactActive: false,
      mobileNavbarIsActive: true,
      projectToView:{},
      projects: [ {category:"Logos",
                    designs: [
        {
          title: "Same Day Repair Logo",
          img:
            '/images/graphic design/logos/A-Same-Day-Repair-Logo-MockUp.jpg',
          summary:
            "A contemporary logo design for a repair company. Designed in Adobe Illustrator.",
         },
        {
          title: "CPA Logo",
          img:
            '/images/graphic design/logos/Bayshore-CPA-Logo-Mockup.jpg',
          summary:
            "A contemporary logo design for a CPA. Designed in Adobe Illustrator.",},
        {
          title: "Memory Care Center Logo",
          img:
            '/images/graphic design/logos/Bayshore-Memory-Care-Logo-Mockup.jpg',
          summary:
            "A contemporary logo design for a repair company. Designed in Adobe Illustrator.",},
      ]},
      {category: "Brochures",
      designs: []},
      {category: "Flyers",
      designs: []},
      {category:"Banners",
      designs: []},
      {category:"Postcards",
      designs: []},
      ],
    };
  }

  aboutMeButton = () => {
    this.setState({
      isAboutMeActive: true,
      isProjectsActive: false,
      isWorkHistoryActive: false,
      isContactActive: false,
    });
  };

  projectsButton = () => {
    this.setState({
      isAboutMeActive: false,
      isProjectsActive: true,
      isWorkHistoryActive: false,
      isContactActive: false,
    });
  };

  workHistoryButton = () => {
    this.setState({
      isAboutMeActive: false,
      isProjectsActive: false,
      isWorkHistoryActive: true,
      isContactActive: false,
    });
  };

  contactButton = () => {
    this.setState({
      isAboutMeActive: false,
      isProjectsActive: false,
      isWorkHistoryActive: false,
      isContactActive: true,
    });
  };

  closeButton = () => {

    this.setState({
      isProjectModalActive: false,
      isProjectsBlurred: false
    })
};

  mobileNavbarReveal = (event) => {
    event.preventDefault();
    this.setState({ mobileNavbarIsActive: !this.state.mobileNavbarIsActive });
  };

  openProjectModal = (project) => {
this.setState({
   projectToView: project,
   isProjectModalActive: true,
   isProjectsBlurred: true,
   upDateGameview: false
});
console.log(project);
console.log(this.state.projectToView);
};

  render() {
    return (
      <div class="container">
         <section class="welcome-section">
      <h1 id="HeaderText">Travis Simpkins' Portfolio</h1>
   </section>
            <BrowserRouter>
        <nav
          className={this.state.mobileNavbarIsActive ? "navbar" : "hidden"}
          onClick={this.mobileNavbarReveal}
        >
          <h1 className="menuHeader">Menu</h1>
        </nav>
        <nav className={this.state.mobileNavbarIsActive ? "hidden" : "navbar"}>
          <h2 className="menuHeader" onClick={this.mobileNavbarReveal}>-</h2>
          <ul id="navList">
                      <a class="navbartext navbartextAbout" href='#section1' >
                About
            </a>
              <a class="navbartext navbartextProjects" href='#section2'  >
                Projects
            </a>
              <a class="navbartext navbartextExperience" href='#section3'  >  Experience
            </a>
              <li class="navbartext navbartextContact">
                <a href="mailto:t73designs@yahoo.com" target="_blank" rel="noopener noreferrer">
                  t73designs@yahoo.com
              </a>
              |{" "}
                <a href="https://github.com/tsimpkins73" target="_blank" rel="noopener noreferrer">
                  Github
              </a>{" "}
              |{" "}
                <a
                  href="https://www.linkedin.com/in/travis-simpkins/"
                  target="_blank" rel="noopener noreferrer"
                >
                  LinkedIn
              </a>
              </li>
           
          </ul>
        </nav>

        <nav className="desktop-navbar">
          <ul id="navList">
              <a class="navbartext" href='#section1' >About</a>
              <a class="navbartext" href='#section2' >Projects
            </a>
              <a class="navbartext" href='#section3' >
                Experience
            </a>
              <li class="navbartext">
                <a href="mailto:t73designs@yahoo.com" target="_blank" rel="noopener noreferrer">
                  t73designs@yahoo.com
              </a>
              |{" "}
                <a href="https://github.com/tsimpkins73" target="_blank" rel="noopener noreferrer">
                  Github
              </a>{" "}
              |{" "}
                <a
                  href="https://www.linkedin.com/in/travis-simpkins/"
                  target="_blank" rel="noopener noreferrer"
                >
                  LinkedIn
              </a>
              </li>
          </ul>
        </nav>
        <AboutMe />
        <Projects
              isActive={this.state.isProjectsActive}
              isProjectsBlurred={this.state.isProjectsBlurred}
              isProjectModalActive={this.state.isProjectModalActive}
              projects={this.state.projects}
              projectToView ={this.state.projectToView}
              openProjectModal={this.openProjectModal}
              closeButton={this.closeButton}
               />
               <WorkHistory />
        </BrowserRouter>
      </div>
    );
  }
}
