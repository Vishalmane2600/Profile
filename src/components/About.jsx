import React from "react"; // Import CSS file for styling
import image from "../image.jpg";
import '../star.css';

const AboutMe = () => {
  return (
    <div className="about-me-content">
      <div className="left-part-about">
        <div className="profile">
          <img src={image} alt="Profile" />
        </div>
      </div>
      <div className="right-part-about">
        <div className="right-part-about1">
          <h3>
            <span>&mdash;</span> About Me
          </h3>
          <h2>Vishal Mane</h2>
          <p>
            Computer Science Engineer with a strong foundation in Programming,
            Algorithms, and Problem-solving. Having skills in CPP, JAVA, PYTHON
            . Which I can use in the growth of organization and my career. My
            technical skills will contribute to the development of innovative
            software solutions.
          </p>
          <div className="skill">
           <div>
           <span id="skill-lang">HTML/CSS/JS</span>
            <br />
            <div className="stars">
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star empty"></span>
            </div>
           </div>
           <div>
           <span id="skill-lang">React JS</span>
            <br />
            <div className="stars">
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star empty"></span>
            </div>
           </div>
           <div>
           <span id="skill-lang">MERN Stack</span>
            <br />
            <div className="stars">
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star empty"></span>
            </div>
           </div>
           <div>
           <span id="skill-lang">Java</span>
            <br />
            <div className="stars">
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star empty"></span>
              <span className="star empty"></span>
            </div>
           </div>
           <div>
           <span id="skill-lang">C++</span>
            <br />
            <div className="stars">
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star empty"></span>
            </div>
           </div>
           <div>
           <span id="skill-lang">Python</span>
            <br />
            <div className="stars">
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star empty"></span>
              <span className="star empty"></span>
            </div>
           </div>
           <div>
           <span id="skill-lang">DSA</span>
            <br />
            <div className="stars">
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star empty"></span>
            </div>
           </div>
           <div>
           <span  id="skill-lang">DBMS</span>
            <br />
            <div className="stars">
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star empty"></span>
              <span className="star empty"></span>
            </div>
           </div>
          
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
