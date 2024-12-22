import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import AdComponent from './AdComponenet';

const VideoPlayer = () => {
  const videoUrls = [
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439898/movie_part0_fywogd.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439798/movie_part1_zthard.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439953/movie_part2_m68i5o.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439960/movie_part3_wdcozj.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439868/movie_part4_tfckim.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439943/movie_part6_cvw5dg.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439935/movie_part7_nhbats.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439947/movie_part8_gzkstm.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439966/movie_part9_nnaewh.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439869/movie_part10_wl9lss.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439815/movie_part11_iwfhyc.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439730/movie_part12_wdggys.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439937/movie_part13_dwx9e2.mp4',
    'https://res.cloudinary.com/dq3a6rfep/video/upload/q_auto,f_auto/v1733439821/movie_part14_lrng60.mp4',
    ''
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
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      {/* Header */}
      <header className="w-full bg-gray-900 py-4 shadow-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-yellow-500">MIRAGE STREAMING</h1>
          <button
            onClick={goHome}
            className="px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition"
          >
            Home
          </button>
        </div>
      </header>

      {/* AdComponent */}
      <div className="w-full max-w-5xl mx-auto mt-4">
        <AdComponent />
      </div>

      {/* Video Player Section */}
      <div className="w-full max-w-5xl mx-auto mt-8 bg-gray-900 rounded-lg shadow-lg overflow-hidden relative">
        {loading && <p className="text-center py-4">Loading video...</p>}
        {error && (
          <p className="text-center py-4 text-red-500">
            Failed to load the video. Please check your network or device compatibility.
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
          config={{
            file: {
              attributes: {
                crossOrigin: 'anonymous',
                controlsList: 'nodownload', // Disable download button
                disablePictureInPicture: true, // Disable PiP
              },
            },
          }}
        />
        {error && (
          <video
            controls
            width="100%"
            height="500px"
            src={videoUrls[currentPart]}
            onLoadedData={() => setLoading(false)}
            onError={() => setError(true)}
            controlsList="nodownload" // Disable download button
            disablePictureInPicture // Disable PiP
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Next/Previous Buttons */}
      <div className="mt-6 w-full max-w-5xl mx-auto flex justify-between items-center px-4">
        <button
          onClick={handlePrev}
          disabled={currentPart === 0}
          className={`px-6 py-3 rounded-lg font-semibold transition text-gray-900 bg-yellow-500 shadow-lg hover:bg-yellow-600 ${
            currentPart === 0 && 'opacity-50 cursor-not-allowed'
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={isComplete}
          className={`px-6 py-3 rounded-lg font-semibold transition text-gray-900 bg-blue-500 shadow-lg hover:bg-blue-600 ${
            isComplete && 'opacity-50 cursor-not-allowed'
          }`}
        >
          {isComplete ? 'Completed' : 'Next Part'}
        </button>
      </div>

      {/* Completion Message */}
      {isComplete && (
        <div className="mt-8 text-center">
          <p className="text-2xl font-semibold text-green-400">🎉 Congratulations! You’ve completed the movie.</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
