import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './components/home/home';
import AboutUs from './components/aboutus/aboutus';
import Academics from './components/academics/academics';
import Admissions from './components/admissions/admissions';
import Faculty from './components/faculty/faculty';
import Students from './components/students/students';
import Gallery from './components/gallery/gallery';
import ContactUs from './components/contact/contactus';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <div className="App">
        <nav>
          <button className="menu-button" onClick={toggleMenu}>
            ☰
          </button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/academics" onClick={() => setMenuOpen(false)}>Academics</Link>
            <Link to="/admissions" onClick={() => setMenuOpen(false)}>Admissions</Link>
            <Link to="/faculty" onClick={() => setMenuOpen(false)}>Faculty</Link>
            <Link to="/students" onClick={() => setMenuOpen(false)}>Students</Link>
            <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
