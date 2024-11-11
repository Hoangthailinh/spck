import React from "react";
import "./MusicVideo.css";

function MusicVideo() {
  // Dữ liệu giả cho danh sách video
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
  ];

  return (
    <div className="music-video-container">
      <h2 className="section-title">
        Music <span className="highlight">Video</span>
      </h2>
      <div className="music-video-list">
        {videos.map((video, index) => (
          <div className="video-item" key={index}>
            <img src={video.cover} alt={video.title} className="video-cover" />
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-artist">{video.artist}</p>
              <p className="video-views">{video.views}</p>
            </div>
          </div>
        ))}
        <div className="view-all">
          <div className="view-all-icon">+</div>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
}

export default MusicVideo;
