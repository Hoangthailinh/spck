import React, { useState } from "react";
import "./AlbumsList.css";
import AlbumInfo from "../AlbumInfo/AlbumInfo";
import { Navigate, useNavigate } from "react-router-dom";
const albums = [
  { title: "I Got Heaven", artist: "Mannequin", cover: "./Rectangle 17 (10).png" },
  { title: "Saviors", artist: "Green Day", cover: "./Rectangle 17 (11).png" },
  { title: "Loss of Life", artist: "MGMT", cover: "./Rectangle 17 (12).png" },
  { title: "All Quiet on the Eastern", artist: "The Libertines", cover: "./Rectangle 17 (13).png" },
  { title: "Little Rope", artist: "Sleater-Kinney", cover: "./Rectangle 17 (14).png" },
  { title: "Saviors", artist: "Green Day", cover: "./Rectangle 17 (11).png" },
  { title: "All Quiet on the Eastern", artist: "The Libertines", cover: "./Rectangle 17 (13).png" },
  { title: "Saviors", artist: "Green Day", cover: "./Rectangle 17 (11).png" },
  { title: "Loss of Life", artist: "MGMT", cover: "./Rectangle 17 (12).png" },
  { title: "Little Rope", artist: "Sleater-Kinney", cover: "./Rectangle 17 (14).png" },
  { title: "Loss of Life", artist: "MGMT", cover: "./Rectangle 17 (12).png" },
  { title: "All Quiet on the Eastern", artist: "The Libertines", cover: "./Rectangle 17 (13).png" },
  { title: "Little Rope", artist: "Sleater-Kinney", cover: "./Rectangle 17 (14).png" },
  { title: "I Got Heaven", artist: "Mannequin", cover: "./Rectangle 17 (10).png" },
  { title: "I Got Heaven", artist: "Mannequin", cover: "./Rectangle 17 (10).png" },
];
export default function AlbumsList() {
  const [displayInfo, setDisplayInfo] = useState(false);
  const handleClickAlbum = () => {
    return displayInfo ? setDisplayInfo(false) : setDisplayInfo(true);
  };
  return (
    <div>
      {displayInfo ? (
        <AlbumInfo setDisplayInfo={setDisplayInfo}></AlbumInfo>
      ) : (
        <div className="new-albums-container">
          <div className="albumsList">
            {albums.map((album, index) => (
              <div className="album-item" key={index} onClick={() => handleClickAlbum()} style={{ cursor: "pointer" }}>
                <img src={album.cover} alt={album.title} className="album-cover" />
                <div className="album-info">
                  <h3 className="album-title">{album.title}</h3>
                  <p className="album-artist">{album.artist}</p>
                </div>
                <div className="status-indicator"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
