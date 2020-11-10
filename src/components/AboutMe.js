'use strict';
import React from 'react';
import '../css/index.css'

export default class AboutMe extends React.Component {
  
  render(){
  return (
    <section className={'BioSection'} id="section1">
        <div id="AboutMeText">
       <h2>Hi, I'm Travis</h2>
       <p id="AboutMeText-para">I truly enjoy building and creating new things. Whether it’s building Lego creations
          with my children, drawing, painting, or anything else, I love the process of making something new. That
          enjoyment of creation is what led me to a career in graphic design and now to web development.
<br></br><br></br>
          I'm a PERN stack developer with 15 years of graphic design experience and a passion for improvement. I am
          competently proficient in a variety of Web Development skills including; HTML5, CSS, JS, jQuery, React,
          Node, & PostgreSQL. Additionally, being the main source for all things IT in the small businesses I’ve
          worked for has given me a dedication to documentation and concise and usable communication. I’m looking
          forward to creating fantastic things with a team of great programmers. </p>
       <a href="https://github.com/tsimpkins73" id="profile-link" target="_blank" rel="noopener noreferrer">See
          my Github here.</a>

    </div>
    <div id="AboutMeImage">
       </div>
 </section>
  );
  }
}

