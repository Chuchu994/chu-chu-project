import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {/* HEADER */}
       <section>
        <header>
            <div className="nav-links-text"><Link to="/">Home</Link></div>
            <div className="nav-links-text"><Link to="/Contact-us">ContactUs</Link></div>
            <div className="nav-links-text"><Link to="/Contact">Contact</Link></div>
            <div className="nav-links-text"><Link to="/Services">Services</Link></div>

        </header>
    </section>
    </div>
  )
}

export default Header
