import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';

import Home from "./pages/Home.js";
import Contact from './pages/Contact';
import DemoService from './pages/getus';
import Placeareas from './components/Place.js'

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("tourist ");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoService />} /> 
            <Route path="/place1" element={<Placeareas />} /> 
            </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;