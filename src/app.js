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
          title: "Web Dev Toolkit App",
          img:
            "https://github.com/tsimpkins73/PORT-SITE/blob/master/images/WDTK-Dashboard-SC.png?raw=true",
          repoLink: "https://github.com/tsimpkins73/Web-Dev-Toolkit-Client",
          liveLink: "https://web-dev-toolkit-client.now.sh/",
          summary:
            "Web Dev Toolkit is an aggregated resource hub. This app makes it easy for Web Developers to find learning and working resources in one location.",
          description:
            "Web Dev Toolkit is an aggregated resource hub. This app makes it easy for Web Developers to find learning and working resources in one location. The resources are grouped together based upon their type; Tutorials, Course, Videos, and Utilities. This app allows authorized users to visit a variety of web development resources, save favorite resources, and search through resources to find specific content. Web Dev Toolkit client was built using React and vanilla HTML & CSS.It utilizes React - Router and other functions to navigate through content choices and manipulation.The custom Web Dev Toolkit API was built using Node, PostgreSQL, knex, and Express.It also utilizes chai & Mocha as testing methods, and JWT for authentication.",
        },
        {
          title: "theConsole Web Development Blog",
          img:
            "https://github.com/tsimpkins73/PORT-SITE/blob/master/images/theConsole-Dashboard-SC.png?raw=true",
          repoLink: "https://github.com/tsimpkins73/theConsole",
          liveLink: "https://theconsole-thankful-cassowary.now.sh/",
          summary:
            "theConsole is a blog dedicated to republishing articles useful to and centered around web development.",
          description:
            "theConsole is a blog dedicated to republishing articles useful to and centered around web development. This app allows authorized users to read articles, save favorite articles, and comment on articles.The user can also search for articles or peruse articles based on their category. theConsole client was built using React and vanilla HTML & CSS.It utilizes React - Router and other functions to navigate through content choices and manipulation.The custom theConsole API was built using Node, PostgreSQL, knex, and Express.It also utilizes chai & Mocha as testing methods.",
        },
        {
          title: "Flipping Wars",
          img:
            "https://raw.githubusercontent.com/tsimpkins73/PORT-SITE/master/images/FlippingAppScreenshot.png",
          repoLink: "https://github.com/tsimpkins73/Flipping-Game",
          liveLink: "https://flipping-wars.vercel.app/",
          summary:
            " A buying and selling game where you buy low and (hopefully) sell high. It is built with HTML5, CSS, JavaScript, & React.",
          description:
            " A buying and selling game where you buy low and (hopefully) sell high. It is built with HTML5, CSS, JavaScript, & React.",
        },
        {
          title: "Marvel Character Search App Project",
          img:
            "https://raw.githubusercontent.com/tsimpkins73/PORT-SITE/master/images/CharacterSearchAppScreenshot.png",
          repoLink:
            "https://github.com/tsimpkins73/Marvel-Character-Search-App",
          liveLink:
            "https://tsimpkins73.github.io/Marvel-Character-Search-App/",
            summary:
            "This is a character search app that returns images, storylines and other information about the searched character.",
          description:
            "This is a character search app that returns images, storylines and other information about the searched character. The search functionality retrieves information from the Marvel API(https: //developer.marvel.com) & the Movie Database API (https: //developers.themoviedb.org/3). This page was built with HTML5, CSS, Javascript, & Jquery.",
        },
        {
          title: "Marvel Quiz App",
          img:
            "https://repository-images.githubusercontent.com/193247239/5c9a6380-98e7-11e9-99c1-e985be06553d",
          repoLink:
            "https://github.com/tsimpkins73/Quiz-App",
          liveLink: "https://tsimpkins73.github.io/Quiz-App//",
          summary:
            "This is a functional quiz app abotu Marvel comics characters.",
          description:
            "This is a functional quiz app built with HTML5, CSS, Javascript, & Jquery.",
        },
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
    };uet
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
