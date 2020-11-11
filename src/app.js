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
            'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/A-Same-Day-Repair-Logo-MockUp.jpg',
          summary:
            "A contemporary logo design for a repair company. Designed in Adobe Illustrator.",
         },
        {
          title: "CPA Logo",
          img:
            'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Bayshore-CPA-Logo-Mockup.jpg',
          summary:
            "A contemporary logo design for a CPA. Designed in Adobe Illustrator.",},
        {
          title: "Memory Care Center Logo",
          img:
            'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Bayshore-Memory-Care-Logo-Mockup.jpg',
          summary:
            "A contemporary logo design for a memory care center. Designed in Adobe Illustrator.",},
            {
              title: "Blue Star Insurance Logo",
              img:
                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Blue-Star-Logo.jpg',
              summary:
                "A contemporary logo design for an insurance company. Designed in Adobe Illustrator.",
             },
            {
              title: "Creative Administrative Consulting Logo",
              img:
                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Creative-Administrative-Consulting-Logo.jpg',
              summary:
                "A modern logo design for a consulting agency. Designed in Adobe Illustrator.",},
            {
              title: "Integrity Business Brokers Logo",
              img:
                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Integrity%20Business%20Brokers%20Logo%20MockUp.jpg',
              summary:
                "A modern logo design for a business brokers company. Designed in Adobe Illustrator.",},
                {
                  title: "Inventors Launchpad Logo",
                  img:
                    'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Inventors%20Launchpad%20Logo%20MockUp.jpg',
                  summary:
                    "A playful, modern logo design for an invnetor's resource company. Designed in Adobe Illustrator.",
                 },
                {
                  title: "Kraken Up Logo",
                  img:
                    'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Kraken%20Up%20Logo.jpg',
                  summary:
                    "A modern, grunge style logo design for a recreational vehicle accessory and repair company. Designed in Adobe Illustrator.",},
                {
                  title: "La Ceiba Restaurant Logo",
                  img:
                    'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/La%20Ceiba%20Logo%20MockUp.jpg',
                  summary:
                    "A playful, modern logo design for a restaurant in Cuba. Designed in Adobe Illustrator.",},
                    {
                      title: "Monarca Cigar Logo",
                      img:
                        'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Monarca%20Cigar%20Logo.jpg',
                      summary:
                        "A modern logo design for an cigar company. Designed in Adobe Illustrator.",
                     },
                    {
                      title: "RC Classic & Collision",
                      img:
                        'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/RC%20Classic%20%26%20Collision%20Logo.jpg',
                      summary:
                        "A classic logo design for a classic car sales & repairs company. Designed in Adobe Illustrator.",},
                    {
                      title: "Remarkable Real Estate Logo",
                      img:
                        'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Remarkable%20Real%20Estate%20Logo%20Mockup.jpg',
                      summary:
                        "A modern logo design for a real estate company. Designed in Adobe Illustrator.",},
                                                  {
                              title: "Sisia Hotel Logo",
                              img:
                                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Sisia%20Logo%20MockUp.jpg',
                              summary:
                                "A playful, modern logo design for a hotel & resort. Designed in Adobe Illustrator.",
                             },
                            {
                              title: "Symmetry Chiropractic Logo",
                              img:
                                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Symmetry%20Chiropractic%20Logo.jpg',
                              summary:
                                "A modern corporate logo design for a chiropractic practice. Designed in Adobe Illustrator.",},
                            {
                              title: "Universal Flooring Logo",
                              img:
                                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Universal%20Flooring%20Logo%20MockUp.jpg',
                              summary:
                                "A modern corporate logo design for a flooring company. Designed in Adobe Illustrator.",},
      ]},
      {category: "Brochures",
      designs:  [
        {
          title: "Academic Alliance Brochure",
          img:
            'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/brochures/Academic%20Alliance%20Brochure.jpg',
          summary:
            "A contemporary logo design for a repair company. Designed in Adobe Illustrator.",
         },
        {
          title: "CPA Logo",
          img:
            'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Bayshore-CPA-Logo-Mockup.jpg',
          summary:
            "A contemporary logo design for a CPA. Designed in Adobe Illustrator.",},
        {
          title: "Memory Care Center Logo",
          img:
            'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Bayshore-Memory-Care-Logo-Mockup.jpg',
          summary:
            "A contemporary logo design for a memory care center. Designed in Adobe Illustrator.",},
            {
              title: "Blue Star Insurance Logo",
              img:
                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Blue-Star-Logo.jpg',
              summary:
                "A contemporary logo design for an insurance company. Designed in Adobe Illustrator.",
             },
            {
              title: "Creative Administrative Consulting Logo",
              img:
                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Creative-Administrative-Consulting-Logo.jpg',
              summary:
                "A modern logo design for a consulting agency. Designed in Adobe Illustrator.",},
            {
              title: "Integrity Business Brokers Logo",
              img:
                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Integrity%20Business%20Brokers%20Logo%20MockUp.jpg',
              summary:
                "A modern logo design for a business brokers company. Designed in Adobe Illustrator.",},
                {
                  title: "Inventors Launchpad Logo",
                  img:
                    'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Inventors%20Launchpad%20Logo%20MockUp.jpg',
                  summary:
                    "A playful, modern logo design for an invnetor's resource company. Designed in Adobe Illustrator.",
                 },
                {
                  title: "Kraken Up Logo",
                  img:
                    'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Kraken%20Up%20Logo.jpg',
                  summary:
                    "A modern, grunge style logo design for a recreational vehicle accessory and repair company. Designed in Adobe Illustrator.",},
                {
                  title: "La Ceiba Restaurant Logo",
                  img:
                    'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/La%20Ceiba%20Logo%20MockUp.jpg',
                  summary:
                    "A playful, modern logo design for a restaurant in Cuba. Designed in Adobe Illustrator.",},
                    {
                      title: "Monarca Cigar Logo",
                      img:
                        'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Monarca%20Cigar%20Logo.jpg',
                      summary:
                        "A modern logo design for an cigar company. Designed in Adobe Illustrator.",
                     },
                    {
                      title: "RC Classic & Collision",
                      img:
                        'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/RC%20Classic%20%26%20Collision%20Logo.jpg',
                      summary:
                        "A classic logo design for a classic car sales & repairs company. Designed in Adobe Illustrator.",},
                    {
                      title: "Remarkable Real Estate Logo",
                      img:
                        'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Remarkable%20Real%20Estate%20Logo%20Mockup.jpg',
                      summary:
                        "A modern logo design for a real estate company. Designed in Adobe Illustrator.",},
                                                  {
                              title: "Sisia Hotel Logo",
                              img:
                                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Sisia%20Logo%20MockUp.jpg',
                              summary:
                                "A playful, modern logo design for a hotel & resort. Designed in Adobe Illustrator.",
                             },
                            {
                              title: "Symmetry Chiropractic Logo",
                              img:
                                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Symmetry%20Chiropractic%20Logo.jpg',
                              summary:
                                "A modern corporate logo design for a chiropractic practice. Designed in Adobe Illustrator.",},
                            {
                              title: "Universal Flooring Logo",
                              img:
                                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/logos/Universal%20Flooring%20Logo%20MockUp.jpg',
                              summary:
                                "A modern corporate logo design for a flooring company. Designed in Adobe Illustrator.",},
      ]},
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
