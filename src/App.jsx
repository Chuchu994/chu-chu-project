import React from "react";
import handsome from "./assets/1079551.png";
import Test from "./assets/1079551.png";
import Kamara from "./assets/fine girl.webp";
import Riggs from "./assets/800158276.jpg";

const App = () => {
  return (
    <div>
      {/* Header */}
      <section>
        <header>
          <div className="nav-links-text">
            <a href="#">Home</a>
          </div>

          <div className="nav-links-text">
            <a href="#">About</a>
          </div>

          <div className="nav-links-text">
            <a href="#">Contact</a>
          </div>

          <div className="nav-links-text">
            <a href="#">Services</a>
          </div>
        </header>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>Welcome to My Webpage</h1>

            <p>
              Learn full-stack development, UI/UX, graphic design and other
              digital skills.
            </p>

            <button>Get Started</button>
          </div>
        </div>
      </section>

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

      {/* Testimonials Section */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>

        <h2>Feedback From Our Students</h2>

        <div className="testimonial-container">
          <div className="card">
            <img src={Kamara} />
            <h3>Grace Kamara</h3>

            <p>
              This Academy completely changed my career. I learnt a lot and I
              am convinced that I can build myself without the help of the
              government.
            </p>
          </div>

          <div className="card">
            <img src={Riggs} alt="Courtney Riggs" />
            <h3>Courtney Riggs</h3>

            <p>
              I am delighted to be among this programme. It has helped me
              tackle problems with the idea of how to solve problems in
              society.
            </p>
          </div>

          <div className="card">
            <img src={handsome} alt="Micha Joseph" /> 
            <h3>Micha Joseph</h3>

            <p>
              I advise you to join this movement. I am independent now. If I
              can do it, then you can do it too.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Join Our Morning Class Digital Skill Academy Today!</h2>

          <p>
            Don't miss out on the opportunity to learn valuable digital skills
            that can transform your career. Enroll now and take the first step
            towards a brighter future.
          </p>

          <a href="#" className="button">
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
