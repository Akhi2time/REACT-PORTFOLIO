import React from 'react';

function About() {
  return(
  <section className="title">
    <h1 class="name">About: Mohamed Mohamed</h1>
    <hr></hr>
    
    <div className="row justify-content-center">
      <div className="col-10" id="about-section">
      <img className="image mb-5 w-40 h-25" src="https://www.linkpicture.com/q/goku.jpeg" alt="Mohamed Mohamed"/>
      <p>
      Hi, My name is Mohamed Mohamed
      </p>
      <p>
      I am an aspiring Software Engineer and Full Stack Web Developer
      </p>
      <p>
      I'm a graduate from the University of Minnesota Full Stack Coding Bootcamp
       </p>
      <p>
      Some of my skills include: 
Front-End: HTML5, CSS3, JavaScript, Bootstrap, ES6, React.js, jQuery
Back-End: Node.js, Express.js, REST APIs, MySQL
Misc: Gitlab, GitHub, NPM, Heroku, Chrome Dev Tools, Data Structures and Algorithms
        </p>
      <p>
      Best Regards!
    </p>
    </div>  
    </div>
  </section> 
)}

export default About;