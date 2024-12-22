import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Buy from './components/Buy';
import Footer from './components/Footer';
import About from './components/About';
import Nav from './components/Nav';
import VideoPlayer from './components/VideoPlayer';
import AdComponent from './Components/AdComponenet';

function App() {
  return (
    <Router>
      {/* Define Routes */}
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Hero />
              <About />
             
      <AdComponent />
              <Gallery />
              <Buy />
              <Footer />
            </>
          }
        />

        {/* Stream movie route */}
        <Route
          path="/stream"
          element={<VideoPlayer />} // No Nav component here
        />
      </Routes>
    </Router>
  );
}

export default App;
