import React from 'react'
import "./Testimony.css";
import Kamara from "../../../assets/fine girl.webp";
import Riggs from "../../../assets/800158276.jpg";
import handsome from "../../../assets/1079551.png";

const Testimony = () => {
  return (
    <div>
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
    </div>
  )
}

export default Testimony
