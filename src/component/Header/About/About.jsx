import React from 'react'
import "./About.css";
import Test from "../../../assets/1079551.png";

const About = () => {
  return (
    <div>
      {/* About Section */}
            <section className="about">
              <div className="about-text">
                <h3>
                  <a href="#">About Us</a>
                </h3>
      
                <h2>
                  Building Skills,
                  <br />
                  Building Future, And Taking Over The World.
                </h2>
      
                <p>
                  At Our Morning Class Digital Skill Academy, we provide practical
                  training that helps you create a future.
                </p>
      
                <ul>
                  <li>✓ Digital Marketing</li>
                  <li>✓ Web Development</li>
                  <li>✓ Cyber Security</li>
                  <li>✓ Data Analysis</li>
                </ul>
      
                <a
                  href="https://www.google.com"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn More
                </a>
              </div>
      
              <div className="about-image">
                <img src={Test} />
              </div>
            </section>
    </div>
  )
}

export default About
