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
            "A contemporary brochure of offered services designed for a dermatology practice.  Designed in Adobe Illustrator.",
         },
        {
          title: "Basal Cell Carcinoma Brochure",
          img:
            'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/brochures/Basal%20Cell%20Carcinoma%20Brochure.jpg',
          summary:
            "A contemporary brochure to inform patients about Basal Cell Carcinoma designed for a dermatology practice. Designed in Adobe Illustrator.",},
        {
          title: "Bliss Medispa Brochure",
          img:
            'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/brochures/Bliss%20Medispa%20Brochure.jpg',
          summary:
            "A contemporary brochure of offered services designed for a medispa.  Designed in Adobe Illustrator.",},
            {
              title: "Dynamixx Brochure",
              img:
                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/brochures/Dynamixx%20Brochure.jpg',
              summary:
                "A modern corporate brochure design for an custome office furniture company. Designed in Adobe Illustrator.",
             },
            {
              title: "Reflexology Brochure",
              img:
                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/brochures/FW%20Reflexology%20Certification%20Brochure.jpg',
              summary:
                "A contemporary brochure to inform patients about Reflexology designed for a reflexology & medispa service. Designed in Adobe Illustrator.",},
            {
              title: "Fusion Medispa Brochure",
              img:
                'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/brochures/Fusion%20Medispa%20Brochure.jpg',
              summary:
              "A contemporary brochure of offered services designed for a medispa.  Designed in Adobe Illustrator.",},
                {
                  title: "Elder Law Brochure",
                  img:
                    'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/brochures/ML%20Elder%20Law%20Brochure.jpg',
                  summary:
                    "A modern brochure to inform customers about Elder Law designed for a law practice. Designed in Adobe Illustrator.",
                 },
                {
                  title: "Renu Medispa Brochure",
                  img:
                    'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/brochures/Renu%20Medispa%20Brochure.jpg',
                  summary:
                  "A contemporary brochure of offered services designed for a medispa.  Designed in Adobe Illustrator.",},
               
      ]},
      {category: "Flyers",
      designs: [ {
        title: "Bioleap Flyer",
        img:
          'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/Flyers/Bioleap-Flyer.jpg',
        summary:
          "A  modern corporate flyer design for a bio-energy company.  Designed in Adobe Illustrator.",
       },
      {
        title: "Evening of Beauty Flyer",
        img:
          'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/Flyers/EOB-Flyer.jpg',
        summary:
          "A  modern event flyer design for an event hosted by a dermatology practice.  Designed in Adobe Illustrator.",},
      {
        title: "Fusion Medispa Flyer 1",
        img:
          'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/Flyers/Fusion%20beach%20Bound%20Flyer.jpg',
        summary:
          "A modern flyer of specials designed for a medispa.  Designed in Adobe Illustrator.",},
          {
            title: "Fusion Medispa Flyer 2",
            img:
              'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/Flyers/Fusion_Mens%20Laser%20Flyer.jpg',
            summary:
              "A modern flyer of specials designed for a medispa. Designed in Adobe Illustrator.",
           },
          {
            title: "Golf Tournament Flyer",
            img:
              'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/Flyers/Golf-Tournament-Flyer.jpg',
            summary:
              "A modern flyer designed to advertise a golf tournament. Designed in Adobe Illustrator.",},
          {
            title: "Island Crew Flyer",
            img:
              'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/Flyers/Island-Crew-Flyer.jpg',
            summary:
            "A modern flyer of specials designed for a restaurant. Designed in Adobe Illustrator.",},
              {
                title: "Renu Corporate Flyer",
                img:
                  'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/Flyers/Renu%20Corporate%20Flyer.jpg',
                summary:
                "A modern flyer of specials and services designed for a medispa. Designed in Adobe Illustrator.",
               },
              {
                title: "Title Abstract Flyer",
                img:
                  'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/Flyers/Title-Abstract-Flyer.jpg',
                summary:
                "A modern flyer of specials and services designed for a financial services company. Designed in Adobe Illustrator.",},
                {
                  title: "Westchase Cleaning Flyer",
                  img:
                    'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/Flyers/Westchase%20Cleaning%20Flyer.jpg',
                  summary:
                  "A modern flyer of specials and services designed for a home & office cleaning company. Designed in Adobe Illustrator.",},
              ]},
      {category:"Banners",
      designs: [{
        title: "Academic Alliance Roll-up Banner",
        img:
          'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/banners/Academic%20Alliance%20Rollup.jpg',
        summary:
          "A  modern corporate banner design for a dermatology practice.  Designed in Adobe Illustrator.",
       },
      {
        title: "CWE Banner",
        img:
          'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/banners/CWE%20Fabric%20Banner%20Mockup.jpg',
        summary:
          "A  modern event banner design for a church/missionary group.  Designed in Adobe Illustrator.",},
      {
        title: "Essential Balance Banner",
        img:
          'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/banners/Essential%20Balance%20Fabric%20Banner%20Mockup.jpg',
        summary:
          "A modern banner designed for a holistic wellness center.  Designed in Adobe Illustrator.",},
          {
            title: "Florida Primary Care Centers Banner",
            img:
              'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/banners/Florida%20Dept%20of%20Children%20%26%20Families%20Rollup.jpg',
            summary:
              "A modern roll-up banner designed for a non-profit family care services group. Designed in Adobe Illustrator.",
           },
          {
            title: "Island Crew Banner",
            img:
              'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/banners/ISLAND%20CREW%20Fabric%20Banner%20Mockup.jpg',
            summary:
              "A  modern event banner design for a restaurant. Designed in Adobe Illustrator.",},
          {
            title: "Kraken Up Banner",
            img:
              'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/banners/Kraken-Up-Fabric-Banner-Mockup.jpg',
            summary:
            "A modern banner designed for a recreational vehicle accessory and repair company. Designed in Adobe Illustrator.",},
              {
                title: "Nissan Xchange Banner",
                img:
                  'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/banners/Nissan%20Xchange%20Rollup.jpg',
                summary:
                "A modern corporate banner designed for a special program for a Nissan dealership. Designed in Adobe Illustrator.",
               },
              {
                title: "Tampa Back Pain Relief Chiro Banner",
                img:
                  'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/banners/Tampa%20Back%20Pain%20Relief%20Chiro%20Fabric%20Banner%20Mockup.jpg',
                summary:
                "A modern banner designed for a chiropractic practice. Designed in Adobe Illustrator.",},
                {
                  title: "Windsor Banner",
                  img:
                    'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/banners/Windsor%20Rollup.jpg',
                  summary:
                  "A modern banner designed for a construction and redevelopment company. Designed in Adobe Illustrator.",},
                ]},
      {category:"Postcards",
      designs: [{
        title: "Advanced RX Rack Card",
        img:
          'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/Advanced-RX-Postcard-Mockup.jpg',
        summary:
          "A modern corporate Rack Card design for a pharmacy.  Designed in Adobe Illustrator.",
       },
      {
        title: "Big Pine Key Rack Card",
        img:
          'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/Big-Pine-Key-Postcard-Mockup.jpg',
        summary:
          "A modern rack card design for a boat rental company.  Designed in Adobe Illustrator.",},
      {
        title: "Bluestar Postcard",
        img:
          'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/Bluestar%20Postcard.jpg',
        summary:
          "A modern corporate postcard designed for an insurance agency.  Designed in Adobe Illustrator.",},
          {
            title: "Surveillance System Company Postcard",
            img:
              'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/Survellaince-System-Company-Postcard.jpg',
            summary:
              "A modern postcard designed for a surveillance system company. Designed in Adobe Illustrator.",
           },
          {
            title: "Gulfshore Bank Postcard",
            img:
              'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/Gulfshore%20Bank%20Postcard.jpg',
            summary:
              "A modern corporate postcard designed for a bank. Designed in Adobe Illustrator.",},
          {
            title: "Mango Cleaners Postcard",
            img:
              'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/Mango%20Cleaners%20Postcard%20Mockup.jpg',
            summary:
            "A modern postcard designed for a dry cleaning company. Designed in Adobe Illustrator.",},
              {
                title: "New Day Realty Postcard",
                img:
                  'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/New%20Day%20Realty%20Postcard.jpg',
                summary:
                "A holiday postcard designed for a realty company. Designed in Adobe Illustrator.",
               },
              {
                title: "Radiant Inspection Postcard",
                img:
                  'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/Radiant-Inspection-Postcard-Mockup.jpg',
                summary:
                "A modern postcard designed for a home inspection company. Designed in Adobe Illustrator.",},
                {
                  title: "Samamed Painting Postcard",
                  img:
                    'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/Samamed%20Painting%20Postcard%20Mockup.jpg',
                  summary:
                  "A modern postcard mailer designed for a painting company. Designed in Adobe Illustrator.",},
                  {
                    title: "Serve & Protect Postcard Postcard",
                    img:
                      'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/Serve%20%26%20Protect%20Postcard%20Mockup.jpg',
                    summary:
                      "A modern corporate postcard designed for a financial services company. Designed in Adobe Illustrator.",},
                  {
                    title: "Tampa Service Solutions Postcard",
                    img:
                      'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/Tampa-Service-Solutions-Postcard-Mockup.jpg',
                    summary:
                    "A modern postcard designed for a commercial cleaning services company. Designed in Adobe Illustrator.",},
                      {
                        title: "Tidewater Postcard",
                        img:
                          'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/Tidewater%20Postcard%20Mockup.jpg',
                        summary:
                        "A modern postcard mailer designed for a podiatry practice. Designed in Adobe Illustrator.",
                       },
                      {
                        title: "Top of the Baths Restaurant Rack Card",
                        img:
                          'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/Top-of-Baths-Postcard-Mockup.jpg',
                        summary:
                        "A modern rack card design for a restaurant. Designed in Adobe Illustrator.",},
                        {
                          title: "Bath & Kitchen Reviews Postcard",
                          img:
                            'https://raw.githubusercontent.com/tsimpkins73/Graphic-Design-Port-Site/main/images/graphic%20design/postcards/bath%20%26%20kitchen%20postcard.jpg',
                          summary:
                          "A modern review postcard designed for a bath & kitchen remodeling company. Designed in Adobe Illustrator.",},
                ]},
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
