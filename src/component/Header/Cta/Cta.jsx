import React from 'react'
import "./Cta.css";

const Cta = () => {
  return (
    <div>
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
  )
}

export default Cta
