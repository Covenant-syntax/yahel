import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const videoData = [
    {
      thumbnail: "https://img.youtube.com/vi/KqxaJiOun4s/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/KqxaJiOun4s",
      title: "You can't believe what this guy did with Nigeria's new anthem",
    },
    {
      thumbnail: "https://img.youtube.com/vi/TZ7fUBOnuS8/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/TZ7fUBOnuS8",
      title: "Callmeyahel - African Legend (Offical video)",
    },
    {
      thumbnail: "https://img.youtube.com/vi/Iokl50BYRLw/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/Iokl50BYRLw",
      title: "Bestbet-Ruth Kadiri",
    },
    {
      thumbnail: "https://img.youtube.com/vi/7KGc12iM9N4/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/7KGc12iM9N4",
      title: "Old Money - Kanayo O Kanayo",
    },
    {
      thumbnail: "https://img.youtube.com/vi/W65IBUUWn3w/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/W65IBUUWn3w",
      title: "Healing Roxanne - Eddy Watson, Stefania Bassey",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <div className="slick-arrow next-arrow">
        <span className="text-gray-700">→</span> {/* Use custom arrow symbol */}
      </div>
    ),
    prevArrow: (
      <div className="slick-arrow prev-arrow">
        <span className="text-gray-700">←</span> {/* Use custom arrow symbol */}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openModal = (videoUrl) => {
    setActiveVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveVideo("");
    setIsModalOpen(false);
  };

  const handleModalCloseClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="gallery bg-gray-900 p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">Related</h2>
      <Slider {...settings}>
        {videoData.map((video, index) => (
          <div
            key={index}
            className="video-item text-center cursor-pointer px-4"
            onClick={() => openModal(video.videoUrl)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="rounded-lg shadow-md hover:opacity-90 transform hover:scale-105 transition"
            />
            <p className="mt-2 text-sm text-gray-300">{video.title}</p>
          </div>
        ))}
      </Slider>

      {/* Modal for displaying video */}
      {isModalOpen && (
        <div
          onClick={handleModalCloseClick}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg w-full max-w-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600"
            >
              &times;
            </button>
            {/* Video Iframe */}
            <iframe
              src={activeVideo}
              title="Video"
              frameBorder="0"
              allowFullScreen
              className="w-full h-96 rounded-lg"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;