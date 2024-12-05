import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import { FaPlay } from "react-icons/fa"; // Play icon

const Hero = () => {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleWatchTrailer = () => setShowTrailer(true);
  const handleCloseTrailer = () => setShowTrailer(false);

  return (
    <div className="movie relative w-full h-[50vh] overflow-hidden outline-none">
      {/* Background Section */}
      {!showTrailer ? (
        <div
          className="relative w-full h-full bg-cover bg-center flex flex-col justify-end text-white transition-opacity duration-500 ease-in-out"
          style={{
            backgroundImage: `url(https://ik.imagekit.io/Movieid/Images/backgroundImageSmall.jpg?tr=w-1280,h-720,q-80)`, // Small screen background
          }}
        >
          {/* Background image change on medium screens */}
          <div
            className="hidden md:block absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://ik.imagekit.io/Movieid/Images/backgroundImageLarge.jpg?tr=w-1920,h-1080,q-80)`, // Medium screen and larger background
            }}
          ></div>

          {/* Gradient Blur Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent h-full"></div>

          {/* Centered Button */}
          <div className="w-full text-center pb-6 relative z-10">
            <button
              onClick={handleWatchTrailer}
              className="px-6 py-3 border-2 border-yellow-500 text-sm text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-semibold flex items-center justify-center rounded-full gap-2 mx-auto transition-transform transform hover:scale-105 duration-300"
            >
              <FaPlay size={14} /> Watch Trailer
            </button>
          </div>
        </div>
      ) : (
        /* Trailer Section */
        <div
          className="absolute inset-0 w-full h-full bg-black flex items-center justify-center transition-opacity duration-500 ease-in-out"
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseTrailer}
            className="absolute top-4 right-4 z-60 p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full"
            aria-label="Close Trailer"
          >
            <AiOutlineClose size={24} />
          </button>
          <iframe
            className="w-full h-full max-w-5xl max-h-[80vh] border-none"
            src="https://www.youtube.com/embed/4W_jYKdA-Bo?autoplay=1&muted=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&controls=0"
            title="Movie Trailer"
            style={{
              border: "none", // Removes any border around the iframe
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Hero;
