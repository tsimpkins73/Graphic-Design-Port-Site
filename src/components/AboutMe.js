"use strict";
import React from "react";
import "../css/index.css";

export default class AboutMe extends React.Component {
  render() {
    return (
      <section className={"BioSection"} id="section1">
        <div id="AboutMeText">
          <h2>Hi, I'm Travis</h2>
          <p id="AboutMeText-para">
            I truly enjoy building and creating new things. Whether it’s
            building Lego creations with my children, drawing, painting, or
            anything else, I love the process of making something new. That
            enjoyment of creation is what led me to a career in graphic design
            and now to web development.
            <br></br>
            <br></br>I am a Graphic Artist with a passion for creating designs
            that perform for my clients and over 15 years of substantial
            multi-industry design experience to back up that passion. I have
            designed nearly everything from newspaper ads to banners to car
            vinyls to web sites. My wealth of experience has given me a strong
            ability to produce designs that will not just look great on screen
            but will actually do great things for you and your business.
          </p>
               </div>
        <div id="AboutMeImage"></div>
      </section>
    );
  }
}
