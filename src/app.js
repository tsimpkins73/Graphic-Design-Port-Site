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
            '../images/graphic design/logos/A-Same-Day-Repair-Logo-MockUp.jpg',
          summary:
            "A contemporary logo design for a repair company. Designed in Adobe Illustrator.",
         },
        {
          title: "CPA Logo",
          img:
            '../images/graphic design/logos/Bayshore-CPA-Logo-Mockup.jpg',
          summary:
            "A contemporary logo design for a CPA. Designed in Adobe Illustrator.",},
        {
          title: "Memory Care Center Logo",
          img:
            '../images/graphic design/logos/Bayshore-Memory-Care-Logo-Mockup.jpg',
          summary:
            "A contemporary logo design for a memory care center. Designed in Adobe Illustrator.",},
            {
              title: "Blue Star Insurance Logo",
              img:
                '../images/graphic design/logos/Blue-Star-Logo.jpg',
              summary:
                "A contemporary logo design for an insurance company. Designed in Adobe Illustrator.",
             },
            {
              title: "Creative Administrative Consulting Logo",
              img:
                '../images/graphic design/logos/Creative-Administrative-Consulting-Logo.jpg',
              summary:
                "A modern logo design for a consulting agency. Designed in Adobe Illustrator.",},
            {
              title: "Integrity Business Brokers Logo",
              img:
                '../images/graphic design/logos/Integrity Business Brokers Logo MockUp.jpg',
              summary:
                "A modern logo design for a business brokers company. Designed in Adobe Illustrator.",},
                {
                  title: "Inventors Launchpad Logo",
                  img:
                    '../images/graphic design/logos/Inventors Launchpad Logo MockUp.jpg',
                  summary:
                    "A playful, modern logo design for an invnetor's resource company. Designed in Adobe Illustrator.",
                 },
                {
                  title: "Kraken Up Logo",
                  img:
                    '../images/graphic design/logos/Kraken Up Logo.jpg',
                  summary:
                    "A modern, grunge style logo design for a recreational vehicle accessory and repair company. Designed in Adobe Illustrator.",},
                {
                  title: "La Ceiba Restaurant Logo",
                  img:
                    '../images/graphic design/logos/La Ceiba Logo MockUp.jpg',
                  summary:
                    "A playful, modern logo design for a restaurant in Cuba. Designed in Adobe Illustrator.",},
                    {
                      title: "Monarca Cigar Logo",
                      img:
                        '../images/graphic design/logos/Monarca Cigar Logo.jpg',
                      summary:
                        "A modern logo design for an cigar company. Designed in Adobe Illustrator.",
                     },
                    {
                      title: "RC Classic & Collision",
                      img:
                        '../images/graphic design/logos/RC Classic & Collision Logo.jpg',
                      summary:
                        "A classic logo design for a classic car sales & repairs company. Designed in Adobe Illustrator.",},
                    {
                      title: "Remarkable Real Estate Logo",
                      img:
                        '../images/graphic design/logos/Remarkable Real Estate Logo Mockup.jpg',
                      summary:
                        "A modern logo design for a real estate company. Designed in Adobe Illustrator.",},
                                                  {
                              title: "Sisia Hotel Logo",
                              img:
                                '../images/graphic design/logos/Sisia Logo MockUp.jpg',
                              summary:
                                "A playful, modern logo design for a hotel & resort. Designed in Adobe Illustrator.",
                             },
                            {
                              title: "Symmetry Chiropractic Logo",
                              img:
                                '../images/graphic design/logos/Symmetry Chiropractic Logo.jpg',
                              summary:
                                "A modern corporate logo design for a chiropractic practice. Designed in Adobe Illustrator.",},
                            {
                              title: "Universal Flooring Logo",
                              img:
                                '../images/graphic design/logos/Universal Flooring Logo MockUp.jpg',
                              summary:
                                "A modern corporate logo design for a flooring company. Designed in Adobe Illustrator.",},
      ]},
     {category: "Brochures",
      designs:  [
        {
          title: "Academic Alliance Brochure",
          img:
            '../images/graphic design/brochures/Academic Alliance Brochure.jpg',
          summary:
            "A contemporary brochure of offered services designed for a dermatology practice.  Designed in Adobe Illustrator.",
         },
        {
          title: "Basal Cell Carcinoma Brochure",
          img:
            '../images/graphic design/brochures/Basal Cell Carcinoma Brochure.jpg',
          summary:
            "A contemporary brochure to inform patients about Basal Cell Carcinoma designed for a dermatology practice. Designed in Adobe Illustrator.",},
        {
          title: "Bliss Medispa Brochure",
          img:
            '../images/graphic design/brochures/Bliss Medispa Brochure.jpg',
          summary:
            "A contemporary brochure of offered services designed for a medispa.  Designed in Adobe Illustrator.",},
            {
              title: "Dynamixx Brochure",
              img:
                '../images/graphic design/brochures/Dynamixx Brochure.jpg',
              summary:
                "A modern corporate brochure design for an custome office furniture company. Designed in Adobe Illustrator.",
             },
            {
              title: "Reflexology Brochure",
              img:
                '../images/graphic design/brochures/FW Reflexology Certification Brochure.jpg',
              summary:
                "A contemporary brochure to inform patients about Reflexology designed for a reflexology & medispa service. Designed in Adobe Illustrator.",},
            {
              title: "Fusion Medispa Brochure",
              img:
                '../images/graphic design/brochures/Fusion Medispa Brochure.jpg',
              summary:
              "A contemporary brochure of offered services designed for a medispa.  Designed in Adobe Illustrator.",},
                {
                  title: "Elder Law Brochure",
                  img:
                    '../images/graphic design/brochures/ML Elder Law Brochure.jpg',
                  summary:
                    "A modern brochure to inform customers about Elder Law designed for a law practice. Designed in Adobe Illustrator.",
                 },
                {
                  title: "Renu Medispa Brochure",
                  img:
                    '../images/graphic design/brochures/Renu Medispa Brochure.jpg',
                  summary:
                  "A contemporary brochure of offered services designed for a medispa.  Designed in Adobe Illustrator.",},
               
      ]},
      {category: "Flyers",
      designs: [ {
        title: "Bioleap Flyer",
        img:
          '../images/graphic design/Flyers/Bioleap-Flyer.jpg',
        summary:
          "A  modern corporate flyer design for a bio-energy company.  Designed in Adobe Illustrator.",
       },
      {
        title: "Evening of Beauty Flyer",
        img:
          '../images/graphic design/Flyers/EOB-Flyer.jpg',
        summary:
          "A  modern event flyer design for an event hosted by a dermatology practice.  Designed in Adobe Illustrator.",},
      {
        title: "Fusion Medispa Flyer 1",
        img:
          '../images/graphic design/Flyers/Fusion beach Bound Flyer.jpg',
        summary:
          "A modern flyer of specials designed for a medispa.  Designed in Adobe Illustrator.",},
          {
            title: "Fusion Medispa Flyer 2",
            img:
              '../images/graphic design/Flyers/Fusion_Mens Laser Flyer.jpg',
            summary:
              "A modern flyer of specials designed for a medispa. Designed in Adobe Illustrator.",
           },
          {
            title: "Golf Tournament Flyer",
            img:
              '../images/graphic design/Flyers/Golf-Tournament-Flyer.jpg',
            summary:
              "A modern flyer designed to advertise a golf tournament. Designed in Adobe Illustrator.",},
          {
            title: "Island Crew Flyer",
            img:
              '../images/graphic design/Flyers/Island-Crew-Flyer.jpg',
            summary:
            "A modern flyer of specials designed for a restaurant. Designed in Adobe Illustrator.",},
              {
                title: "Renu Corporate Flyer",
                img:
                  '../images/graphic design/Flyers/Renu Corporate Flyer.jpg',
                summary:
                "A modern flyer of specials and services designed for a medispa. Designed in Adobe Illustrator.",
               },
              {
                title: "Title Abstract Flyer",
                img:
                  '../images/graphic design/Flyers/Title-Abstract-Flyer.jpg',
                summary:
                "A modern flyer of specials and services designed for a financial services company. Designed in Adobe Illustrator.",},
                {
                  title: "Westchase Cleaning Flyer",
                  img:
                    '../images/graphic design/Flyers/Westchase Cleaning Flyer.jpg',
                  summary:
                  "A modern flyer of specials and services designed for a home & office cleaning company. Designed in Adobe Illustrator.",},
              ]},
      {category:"Banners",
      designs: [{
        title: "Academic Alliance Roll-up Banner",
        img:
          '../images/graphic design/banners/Academic Alliance Rollup.jpg',
        summary:
          "A  modern corporate banner design for a dermatology practice.  Designed in Adobe Illustrator.",
       },
      {
        title: "CWE Banner",
        img:
          '../images/graphic design/banners/CWE Fabric Banner Mockup.jpg',
        summary:
          "A  modern event banner design for a church/missionary group.  Designed in Adobe Illustrator.",},
      {
        title: "Essential Balance Banner",
        img:
          '../images/graphic design/banners/Essential Balance Fabric Banner Mockup.jpg',
        summary:
          "A modern banner designed for a holistic wellness center.  Designed in Adobe Illustrator.",},
          {
            title: "Florida Primary Care Centers Banner",
            img:
              '../images/graphic design/banners/Florida Dept of Children %26 Families Rollup.jpg',
            summary:
              "A modern roll-up banner designed for a non-profit family care services group. Designed in Adobe Illustrator.",
           },
          {
            title: "Island Crew Banner",
            img:
              '../images/graphic design/banners/ISLAND CREW Fabric Banner Mockup.jpg',
            summary:
              "A  modern event banner design for a restaurant. Designed in Adobe Illustrator.",},
          {
            title: "Kraken Up Banner",
            img:
              '../images/graphic design/banners/Kraken-Up-Fabric-Banner-Mockup.jpg',
            summary:
            "A modern banner designed for a recreational vehicle accessory and repair company. Designed in Adobe Illustrator.",},
              {
                title: "Nissan Xchange Banner",
                img:
                  '../images/graphic design/banners/Nissan Xchange Rollup.jpg',
                summary:
                "A modern corporate banner designed for a special program for a Nissan dealership. Designed in Adobe Illustrator.",
               },
              {
                title: "Tampa Back Pain Relief Chiro Banner",
                img:
                  '../images/graphic design/banners/Tampa Back Pain Relief Chiro Fabric Banner Mockup.jpg',
                summary:
                "A modern banner designed for a chiropractic practice. Designed in Adobe Illustrator.",},
                {
                  title: "Windsor Banner",
                  img:
                    '../images/graphic design/banners/Windsor Rollup.jpg',
                  summary:
                  "A modern banner designed for a construction and redevelopment company. Designed in Adobe Illustrator.",},
                ]},
      {category:"Postcards",
      designs: [{
        title: "Advanced RX Rack Card",
        img:
          '../images/graphic design/postcards/Advanced-RX-Postcard-Mockup.jpg',
        summary:
          "A modern corporate Rack Card design for a pharmacy.  Designed in Adobe Illustrator.",
       },
      {
        title: "Big Pine Key Rack Card",
        img:
          '../images/graphic design/postcards/Big-Pine-Key-Postcard-Mockup.jpg',
        summary:
          "A modern rack card design for a boat rental company.  Designed in Adobe Illustrator.",},
      {
        title: "Bluestar Postcard",
        img:
          '../images/graphic design/postcards/Bluestar Postcard.jpg',
        summary:
          "A modern corporate postcard designed for an insurance agency.  Designed in Adobe Illustrator.",},
          {
            title: "Surveillance System Company Postcard",
            img:
              '../images/graphic design/postcards/Survellaince-System-Company-Postcard.jpg',
            summary:
              "A modern postcard designed for a surveillance system company. Designed in Adobe Illustrator.",
           },
          {
            title: "Gulfshore Bank Postcard",
            img:
              '../images/graphic design/postcards/Gulfshore Bank Postcard.jpg',
            summary:
              "A modern corporate postcard designed for a bank. Designed in Adobe Illustrator.",},
          {
            title: "Mango Cleaners Postcard",
            img:
              '../images/graphic design/postcards/Mango Cleaners Postcard Mockup.jpg',
            summary:
            "A modern postcard designed for a dry cleaning company. Designed in Adobe Illustrator.",},
              {
                title: "New Day Realty Postcard",
                img:
                  '../images/graphic design/postcards/New Day Realty Postcard.jpg',
                summary:
                "A holiday postcard designed for a realty company. Designed in Adobe Illustrator.",
               },
              {
                title: "Radiant Inspection Postcard",
                img:
                  '../images/graphic design/postcards/Radiant-Inspection-Postcard-Mockup.jpg',
                summary:
                "A modern postcard designed for a home inspection company. Designed in Adobe Illustrator.",},
                {
                  title: "Samamed Painting Postcard",
                  img:
                    '../images/graphic design/postcards/Samamed Painting Postcard Mockup.jpg',
                  summary:
                  "A modern postcard mailer designed for a painting company. Designed in Adobe Illustrator.",},
                  {
                    title: "Serve & Protect Postcard Postcard",
                    img:
                      '../images/graphic design/postcards/Serve %26 Protect Postcard Mockup.jpg',
                    summary:
                      "A modern corporate postcard designed for a financial services company. Designed in Adobe Illustrator.",},
                  {
                    title: "Tampa Service Solutions Postcard",
                    img:
                      '../images/graphic design/postcards/Tampa-Service-Solutions-Postcard-Mockup.jpg',
                    summary:
                    "A modern postcard designed for a commercial cleaning services company. Designed in Adobe Illustrator.",},
                      {
                        title: "Tidewater Postcard",
                        img:
                          '../images/graphic design/postcards/Tidewater Postcard Mockup.jpg',
                        summary:
                        "A modern postcard mailer designed for a podiatry practice. Designed in Adobe Illustrator.",
                       },
                      {
                        title: "Top of the Baths Restaurant Rack Card",
                        img:
                          '../images/graphic design/postcards/Top-of-Baths-Postcard-Mockup.jpg',
                        summary:
                        "A modern rack card design for a restaurant. Designed in Adobe Illustrator.",},
                        {
                          title: "Bath & Kitchen Reviews Postcard",
                          img:
                            '../images/graphic design/postcards/bath & kitchen postcard.jpg',
                          summary:
                          "A modern review postcard designed for a bath & kitchen remodeling company. Designed in Adobe Illustrator.",},
                ]},
                {category: "Web Development",
              designs: [
                {
                  title: "Web Dev Toolkit App",
                  img:
                    "https://github.com/tsimpkins73/PORT-SITE/blob/master/images/WDTK-Dashboard-SC.png?raw=true",
                        summary:
                    "Web Dev Toolkit is an aggregated resource hub. This app makes it easy for Web Developers to find learning and working resources in one location. Github Repository Link: https://github.com/tsimpkins73/Web-Dev-Toolkit-Client, Live Site Link: https://web-dev-toolkit-client.now.sh/",
                   },
                {
                  title: "theConsole Web Development Blog",
                  img:
                    "https://github.com/tsimpkins73/PORT-SITE/blob/master/images/theConsole-Dashboard-SC.png?raw=true",
                                    summary:
                    "theConsole is a blog dedicated to republishing articles useful to and centered around web development. Github Repository Link: https://github.com/tsimpkins73/theConsole, Live Site Link: https://theconsole-thankful-cassowary.now.sh/",
                             },
                {
                  title: "Flipping Wars",
                  img:
                    "https://raw.githubusercontent.com/tsimpkins73/PORT-SITE/master/images/FlippingAppScreenshot.png",
                  
                  summary:
                    " A buying and selling game where you buy low and (hopefully) sell high. It is built with HTML5, CSS, JavaScript, & React. Github Repository Link: https://github.com/tsimpkins73/Flipping-Game, Live Site Link: https://flipping-wars.vercel.app/",
                               },
                {
                  title: "Marvel Character Search App Project",
                  img:
                    "https://raw.githubusercontent.com/tsimpkins73/PORT-SITE/master/images/CharacterSearchAppScreenshot.png",
                                      summary:
                    "This is a character search app that returns images, storylines and other information about the searched character. Github Repository Link: https://github.com/tsimpkins73/Marvel-Character-Search-App, Live Site Link: https://tsimpkins73.github.io/Marvel-Character-Search-App/",
                                 },
                {
                  title: "Marvel Quiz App",
                  img:
                    "https://repository-images.githubusercontent.com/193247239/5c9a6380-98e7-11e9-99c1-e985be06553d",
                                    summary:
                    "This is a functional quiz app abotu Marvel comics characters. Github Repository Link: https://github.com/tsimpkins73/Quiz-App, Live Site Link: https://tsimpkins73.github.io/Quiz-App//",
                  description:
                    "This is a functional quiz app built with HTML5, CSS, Javascript, & Jquery.",
                },
              ],}
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
      <h1 id="HeaderText">Travis Simpkins'
      <br></br>
      Design Portfolio</h1>
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
