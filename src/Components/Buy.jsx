import React from "react";
import moviePoster2 from "../assets/moviePoster2.jpg"; // Replace with your movie poster image
import { Link as RouterLink } from 'react-router-dom'; // For routing


//The name of this component should be Stream and not Buy

const BuyMovie = () => {

  return (
    <div className="bg-gray-900 buy shadow-lg py-12">
      <div className="buy-movie p-6 max-w-5xl mx-auto flex flex-col items-center md:flex-row md:items-start">
        {/* Movie Poster */}
        <div className="movie-poster flex-shrink-0 flex items-center flex-col mb-6 md:mb-0 md:mr-8">
          <img
            src="https://ik.imagekit.io/Movieid/Images/moviePoster2.jpg?updatedAt=1732929730827" // Replace with your movie poster image
            alt="Movie Poster"
            className="w-[300px] h-[450px] rounded-md shadow-md object-cover"
          />
          <h2 className="text-2xl mb-1 md:hidden mt-6 text-white">Digital</h2>
          <p className="text-sm text-blue-900 md:hidden">Original version</p>
          <RouterLink to="/stream">
          <button
            
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-20 py-3 font-semibold mb-6 mt-8 transition rounded-full w-full md:hidden"
          >
            Stream Now
          </button>
          </RouterLink>
        </div>

        {/* Movie Details */}
        <div className="movie-details flex-grow flex flex-col items-start text-gray-800 w-full">
          <h2 className="text-2xl mb-2 hidden md:block text-white">Digital</h2>
          <p className="text-sm text-blue-700 hidden md:block">Original version</p>

          <RouterLink to="/stream">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-16 py-2 md:px-20 md:py-2 font-semibold mb-6 mt-8 transition rounded-full hidden md:block"
          >
            Stream Now
          </button>
          </RouterLink>
          <ul className="text-lg leading-relaxed space-y-3">
            <li className="mb-3 text-white text-sm md:text-base">
              <span className="text-gray-400">Run Time:</span> 2hr 11min
            </li>
            <li className="mb-3 text-white text-sm md:text-base">
              <span className="text-gray-400">Language & Audio:</span> English / 2.0 / 5.1
            </li>
            <li className="mb-3 text-white text-sm md:text-base">
              <span className="text-gray-400">Subtitles:</span> English
            </li>
            <li className="mb-3 text-white text-sm md:text-base">
              <span className="text-gray-400">Picture:</span> Widescreen / Color
            </li>
            <li className="mb-3 text-white text-sm md:text-base">
              <span className="text-gray-400">Release Date:</span> November 25, 2024
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BuyMovie;