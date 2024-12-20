import React, { useState } from "react";

import "./ArtistList.css";
import ArtistInfo from "../ArtistInfo/ArtistInfo";

const artists = [
  { name: "Eminiem", image: "./69824 2.png" },
  { name: "Imagine Dragons", image: "./69824 3.png" },
  { name: "Adele", image: "./69824 4.png" },
  { name: "Lana Del Ray", image: "./69824 5.png" },
  { name: "Harry Styles", image: "./69824 6.png" },
  { name: "Billie Eilish", image: "./69824 7.png" },
  { name: "Taylor Swift", image: "./69824 3.png" },
  { name: "Ed Sheeran", image: "./69824 5.png" },
  { name: "Drake", image: "./69824 4.png" },
  { name: "Rihanna", image: "./69824 6.png" },
  { name: "Bruno Mars", image: "./69824 2.png" },
  { name: "The Weeknd", image: "./69824 7.png" },
];

export default function ArtistList() {
  const [displayArtist, setDisplayArtist] = useState(false);
  const displayArtistInfo = () => {
    displayArtist ? setDisplayArtist(false) : setDisplayArtist(true);
  };
  return (
    <div>
      {displayArtist ? (
        <ArtistInfo setDisplayArtist={setDisplayArtist}></ArtistInfo>
      ) : (
        <div className="popular-artists-container">
          <div className="artists-list-container">
            {artists.map((artist, index) => (
              <div className="artist-item" key={index} onClick={() => displayArtistInfo()} style={{ cursor: "pointer" }}>
                <img src={artist.image} alt={artist.name} className="artist-image" />
                <p className="artist-name">{artist.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
