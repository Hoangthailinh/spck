import React, { useState } from "react";
import "./MusicVideo.css";

function MusicVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      title: "Gossip",
      artist: "Måneskin",
      views: "231K views",
      cover: "./cb56e6307ab25f1ad58aa7a02fac52c0.jpg",
    },
    {
      title: "Shape Of You",
      artist: "Ed Sheeran",
      views: "5M views",
      cover: "./63b9afab605483f696cb2e8df0064987.jpg",
    },
    {
      title: "Someone Like You",
      artist: "Adele",
      views: "3M views",
      cover: "./ae52f709f9928fdc8d2aa98a670e3237.jpg",
    },
    {
      title: "Roar",
      artist: "Katy Perry",
      views: "4.6M views",
      cover: "./Rectangle 35.png",
    },
    {
      title: "Shake It Off",
      artist: "Taylor Swift ",
      views: "4.2M views",
      cover: "./Rectangle 35 (1).png",
    },
    {
      title: "New Rules",
      artist: "Dua Lipa",
      views: "3.7M views",
      cover: "./Rectangle 35 (2).png",
    },
    {
      title: "Waka Waka",
      artist: "Shakira",
      views: "3.5M views",
      cover: "./Rectangle 35 (3).png",
    },
  ];

  const handleNext = () => {
    if (currentIndex < videos.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="music-video-container">
      <h2 className="section-title">
        Music <span className="highlight">Video</span>
      </h2>
      <div className="carousel-container">
        <button
          className="prev-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &#9664;
        </button>
        <div className="music-video-list">
          {videos.slice(currentIndex, currentIndex + 3).map((video, index) => (
            <div className="video-item" key={index}>
              <img
                src={video.cover}
                alt={video.title}
                className="video-cover"
              />
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-artist">{video.artist}</p>
                <p className="video-views">{video.views}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="next-button"
          onClick={handleNext}
          disabled={currentIndex >= videos.length - 3}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
}

export default MusicVideo;
