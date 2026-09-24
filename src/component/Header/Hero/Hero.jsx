import React from 'react'
import "./Hero.css";

const Hero = () => {
  return (
    <div>
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
    </div>
  )
}

export default Hero
