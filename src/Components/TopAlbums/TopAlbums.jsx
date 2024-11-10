import React from "react";
import "./TopAlbums.css";

function TopAlbums() {
  // Dữ liệu giả cho danh sách album
  const albums = [
    {
      title: "Adele 21",
      artist: "Adele",
      cover: "./Rectangle 17.png", // Thay đổi đường dẫn ảnh theo ý bạn
    },
    {
      title: "Beauty Behind the Madness",
      artist: "The Weeknd",
      cover: "./Rectangle 17 (1).png",
    },
    {
      title: "Scorpion",
      artist: "Drake",
      cover: "./Rectangle 17 (2).png",
    },
    {
      title: "Harry's House",
      artist: "Harry Styles",
      cover: "./Rectangle 17 (3).png",
    },
    {
      title: "Born To Die",
      artist: "Lana Del Rey",
      cover: "./Rectangle 17 (4).png",
    },
  ];

  return (
    <div className="top-albums-container">
      <h2 className="section-titlee">
        Top <span className="highlight">Albums</span>
      </h2>
      <div className="albums-list">
        {albums.map((album, index) => (
          <div className="album-item" key={index}>
            <img src={album.cover} alt={album.title} className="album-cover" />
            <div className="album-info">
              <h3 className="album-title">{album.title}</h3>
              <p className="album-artist">{album.artist}</p>
            </div>
            <div className="status-indicator"></div>{" "}
            {/* Biểu tượng trạng thái */}
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

export default TopAlbums;
