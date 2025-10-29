import Hero from "./components/Hero";
import About from "./components/About";
import Theteam from "./components/Theteam";
import Services from "./components/Services";
import Vision from "./components/Vision";
import PatnerSection from "./components/PatnerSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/general.css";
import { useRef, useEffect, useState } from "react";

function App() {
  const cursorRef = useRef(null);

  // Function to move the cursor
  const moveCursor = (e) => {
    if (cursorRef.current) {
      cursorRef.current.style.top = `${e.pageY - 10}px`;
      cursorRef.current.style.left = `${e.pageX - 10}px`;
    }
  };

  // Function to expand the cursor on click
  const expandCursor = () => {
    if (cursorRef.current) {
      cursorRef.current.classList.add("expand");
      setTimeout(() => {
        cursorRef.current.classList.remove("expand");
      }, 500);
    }
  };

  // Attach mouse move event listener to the document
  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", expandCursor);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", expandCursor);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <Hero/>
      <About />
      <Vision />
      <center>
        <PatnerSection />
      </center>
      <Theteam />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;