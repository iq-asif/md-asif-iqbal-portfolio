import React from "react";
import './header.css';
import { BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom';
import About from '../../pages/about/About';
import Experience from '../../pages/resume/Resume';
import Service from '../../pages/services/Service';
import Skills from '../../pages/skills/Skills';
import Portfolio from "../../pages/portfolio/Portfolio";
import Footer from "../footer/Footer";
import Logo from '../../assets/images/logo.png'


function Header() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Router className="header-wrap">
      <nav className="container pt-5 px-5">
        <div className="grid grid-cols-2 items-center">
          <div>
            {/* <Link to="/Profile"><img src={Logo} alt="logo" className="w-10 max-[600px]:w-6"/></Link> */}
            <Link to="/Profile"><img src={Logo} alt="logo" className="logo"/></Link>
          </div>
          <div className="col-end-7">
            <button onClick={() => setOpen(!isOpen)} className={`hamburger-button ${isOpen ? "open" : "close"}`}/>
            <div className={`panel ${isOpen ? "open" : "close"}`}>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/experience">Experience</Link>
                </li>
                <li>
                  <Link to="/expertise">Expertise</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route id="/about" element={<About />}/>
        <Route id="/experience" element={<Experience />}/>
        <Route id="/expertise" element={<Service />}/>
        <Route id="/skills" element={<Skills/>}/>
        <Route id="/portfolio" element={<Portfolio />}/>
        <Route id="/contact" element={<Footer />}/>
      </Routes>
    </Router>
  );
};

  export default Header;