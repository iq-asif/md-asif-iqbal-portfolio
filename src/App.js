import React from 'react';
import Header from './component/header/Header';
import Profile from './component/profile/Profile';
// import About from '../../pages/about/About';
import About from '../src/pages/about/About';
import Resume from './pages/resume/Resume';
import Service from './pages/services/Service';
import Skills from './pages/skills/Skills';
import Portfolio from './pages/portfolio/Portfolio';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <About/>
      <Resume/>
      <Service/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
