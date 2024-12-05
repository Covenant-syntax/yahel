import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const VideoPlayer = () => {
  const videoUrls = [
    'https://ik.imagekit.io/ftzirqnxf/Movie-clips/movie_part0.mp4?updatedAt=1733408001235',
    'https://ik.imagekit.io/ftzirqnxf/Movie-clips/movie_part1.mp4?updatedAt=1733407937262',
    'https://ik.imagekit.io/ftzirqnxf/Movie-clips/movie_part2.mp4?updatedAt=1733408003382',
    'https://ik.imagekit.io/ftzirqnxf/Movie-clips/movie_part3.mp4?updatedAt=1733408033910',
    'https://ik.imagekit.io/ftzirqnxf/Movie-clips/movie_part4.mp4?updatedAt=1733407973194',
    'https://ik.imagekit.io/ftzirqnxf/Movie-clips/movie_part5.mp4?updatedAt=1733408121392',
    'https://ik.imagekit.io/ftzirqnxf/Movie-clips/movie_part6.mp4?updatedAt=1733408121516',
    'https://ik.imagekit.io/ftzirqnxf/Movie-clips/movie_part7.mp4?updatedAt=1733408138516',
    'https://ik.imagekit.io/ftzirqnxf/Movie-clips/movie_part8.mp4?updatedAt=1733408137627',
    'https://ik.imagekit.io/ftzirqnxf/Movie-clips/movie_part9.mp4?updatedAt=1733408151682',
    // Add more parts if necessary
  ];

  const [currentPart, setCurrentPart] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Preload the next video
  useEffect(() => {
    if (currentPart < videoUrls.length - 1) {
      const nextVideo = new Image();
      nextVideo.src = videoUrls[currentPart + 1];
    }
  }, [currentPart]);

  const handleNext = () => {
    if (currentPart < videoUrls.length - 1) {
      setCurrentPart(currentPart + 1);
      setLoading(true);
      setError(false);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentPart > 0) {
      setCurrentPart(currentPart - 1);
      setLoading(true);
      setError(false);
    }
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 min-h-screen">
      {/* Video Player */}
      <div className="w-full max-w-3xl">
        {loading && <p className="text-gray-500">Loading video...</p>}
        {error && (
          <p className="text-red-500">
            Failed to load the video. Please try again later.
          </p>
        )}
        <ReactPlayer
          url={videoUrls[currentPart]}
          controls
          width="100%"
          height="500px"
          onReady={() => setLoading(false)}
          onStart={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
        />
      </div>

      {/* Next/Previous buttons */}
      <div className="mt-4 flex flex-col items-center w-[270px]">
        <div className="flex justify-between w-[100%]">
          <button
            onClick={handlePrev}
            disabled={currentPart === 0}
            aria-label="Play previous part"
            className={`px-4 py-2 rounded-md font-semibold transition ${
              currentPart === 0
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={isComplete}
            aria-label="Play next part"
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              isComplete
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isComplete ? 'Completed' : 'Watch Next Part'}
          </button>
        </div>
        <button
          onClick={goHome}
          aria-label="Go back home"
          className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition"
        >
          Go Back Home
        </button>
      </div>

      {/* Completion Message */}
      {isComplete && (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold text-green-600">
            🎉 Congratulations! You’ve completed the movie.
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
