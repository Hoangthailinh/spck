import React, { useState } from "react";
import "./AlbumsList.css";
import AlbumInfo from "../AlbumInfo/AlbumInfo";
import { Navigate, useNavigate } from "react-router-dom";
const albums = [
  { title: "Ocean Waves", artist: "The Shoreline", cover: "./Rectangle 17 (10).png" },
  { title: "Golden Hour", artist: "The Shoreline", cover: "./Rectangle 17 (11).png" },
  { title: "Starlit Path", artist: "The Shoreline", cover: "./Rectangle 17 (12).png" },
  { title: "Echoes of Eternity", artist: "The Shoreline", cover: "./Rectangle 17 (13).png" },
  { title: "Nightfall Symphony", artist: "Aurora Lights", cover: "./Rectangle 17 (14).png" },
  { title: "Aurora's Whisper", artist: "Aurora Lights", cover: "./Rectangle 17 (10).png" },
  { title: "Ethereal Realm", artist: "Aurora Lights", cover: "./Rectangle 17 (11).png" },
  { title: "Moonlit Serenade", artist: "Aurora Lights", cover: "./Rectangle 17 (12).png" },
  { title: "Electric Dreams", artist: "Neon Sound", cover: "./Rectangle 17 (13).png" },
  { title: "Neon Paradise", artist: "Neon Sound", cover: "./Rectangle 17 (14).png" },
  { title: "Prism Glow", artist: "Neon Sound", cover: "./Rectangle 17 (10).png" },
  { title: "Harmonic Drift", artist: "Neon Sound", cover: "./Rectangle 17 (11).png" },
  { title: "Wildflower", artist: "Meadow", cover: "./Rectangle 17 (12).png" },
  { title: "Windswept Hills", artist: "Meadow", cover: "./Rectangle 17 (13).png" },
  { title: "Frosted Peaks", artist: "Meadow", cover: "./Rectangle 17 (14).png" },
  { title: "Twilight Reverie", artist: "Meadow", cover: "./Rectangle 17 (10).png" },
  { title: "Velvet Horizon", artist: "Blue Dusk", cover: "./Rectangle 17 (11).png" },
  { title: "Gravity Waves", artist: "Blue Dusk", cover: "./Rectangle 17 (12).png" },
  { title: "Silver Lining", artist: "Blue Dusk", cover: "./Rectangle 17 (13).png" },
  { title: "Golden Embers", artist: "Blue Dusk", cover: "./Rectangle 17 (14).png" },
  { title: "Mystic Forest", artist: "Woodland Spirits", cover: "./Rectangle 17 (10).png" },
  { title: "Dreamcatcher", artist: "Woodland Spirits", cover: "./Rectangle 17 (11).png" },
  { title: "Shadow Dancer", artist: "Woodland Spirits", cover: "./Rectangle 17 (12).png" },
  { title: "Whispering Shadows", artist: "Woodland Spirits", cover: "./Rectangle 17 (13).png" },
  { title: "Crimson Tides", artist: "Scarlet Oceans", cover: "./Rectangle 17 (14).png" },
  { title: "Timeless Echo", artist: "Scarlet Oceans", cover: "./Rectangle 17 (10).png" },
  { title: "Endless Skies", artist: "Scarlet Oceans", cover: "./Rectangle 17 (11).png" },
  { title: "Radiant Glimmer", artist: "Scarlet Oceans", cover: "./Rectangle 17 (12).png" },
  { title: "Golden Glow", artist: "Scarlet Oceans", cover: "./Rectangle 17 (13).png" },
  { title: "Stardust", artist: "Celestial Vibes", cover: "./Rectangle 17 (14).png" },
  { title: "Cosmic Drift", artist: "Celestial Vibes", cover: "./Rectangle 17 (10).png" },
  { title: "Nebula Nights", artist: "Celestial Vibes", cover: "./Rectangle 17 (11).png" },
  { title: "Galactic Echoes", artist: "Celestial Vibes", cover: "./Rectangle 17 (12).png" },
  { title: "Shimmering Sands", artist: "Desert Rose", cover: "./Rectangle 17 (13).png" },
  { title: "Burning Horizon", artist: "Desert Rose", cover: "./Rectangle 17 (14).png" },
  { title: "Mirage", artist: "Desert Rose", cover: "./Rectangle 17 (10).png" },
  { title: "Golden Mirage", artist: "Desert Rose", cover: "./Rectangle 17 (11).png" },
  { title: "Radiant Journey", artist: "Eclipse", cover: "./Rectangle 17 (12).png" },
  { title: "Celestial Glow", artist: "Eclipse", cover: "./Rectangle 17 (13).png" },
  { title: "Eternal Flame", artist: "Eclipse", cover: "./Rectangle 17 (14).png" },
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
