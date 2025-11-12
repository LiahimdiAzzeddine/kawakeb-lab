import {
  Navbar,
  Hero,
  About,
  Services,
  Encryption,
  Skills,
  Footer,
  Contact,
  Works,
  Feedbacks,
  Partners,
} from "./components";
import {
  Video,
  StarsCanvas,
  Design,
} from "./components/sub-components";
import { ScrollToTopButton } from "./components/sub-components";
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect, memo } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OverlayMessage = memo(() => {
  const LanguageData = ["Hello", "مرحبًا", "Bonjour", "Hola",'你好'];
  const [currentHelloIndex, setCurrentHelloIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHelloIndex(
        (prevIndex) => (prevIndex + 1) % LanguageData.length
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overlay-message">
      <h1 className="text-white text-4xl font-bold text-center Microgram">
        {LanguageData[currentHelloIndex]}
      </h1>
    </div>
  );
});

function App() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2400); // (LanguageData.length + 1) * 400 = (5 + 1) * 400 = 2400

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0">
        {showOverlay && <OverlayMessage />}
        <div className="bg-no-repeat bg-center relative z-2">
          <Navbar />
          <Video />
          <Hero />
        </div>
        <div className="relative z-0">
          <div className="hero-body">
            <About />
            <Partners/>
            <Feedbacks/>
            <Services />
            
            {/* <Design /> */}
          </div>
          <Encryption />
          <Works/>
          <Skills />
          <Contact />
          <Footer />
          <ScrollToTopButton />
        </div>
        {/* <StarsCanvas /> */}
      </div>
      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
}

export default App;
