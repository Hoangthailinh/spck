import React from "react";
import "./PopularArtistPlaylist.css";

export default function PopularArtistPlaylist() {
  const playlist = [
    {
      rank: "1",
      title: "Without Me",
      artist: "Eminem",
      releaseDate: "May 15, 2002",
      played: "21,215,618",
      time: "3:26",
      cover: "./eminem1.png",
    },
    {
      rank: "2",
      title: "mockingbird ",
      artist: "Eminem",
      releaseDate: "Apr 25, 2005",
      played: "19,856,112",
      time: "2:45",
      cover: "./eminem2.png",
    },
    {
      rank: "3",
      title: "The Real Slim Shark",
      artist: "Eminem",
      releaseDate: "Nov 30, 2023",
      played: "16,564,223",
      time: "2:11",
      cover: "./eminem3.png",
    },
    {
      rank: "4",
      title: "Lose Yourself",
      artist: "Eminem",
      releaseDate: "Nov 30, 2023",
      played: '16,240,390',
      time: "2:18",
      cover: "./eminem4.png",
    },
    {
      rank: "5",
      title: "Godzila",
      artist: "Eminem",
      releaseDate: "Nov 30, 2023",
      played: '14,367,500',
      time: "3:51",
      cover: "./eminem5.png",
    },
  ];
  return (
    <div>
      <h2 className="section-title">Popular</h2>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0px 10px" }}>
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td>Release Date</td>
            <td style={{ textAlign: "center" }}>Played</td>
            <td style={{ textAlign: "center" }}>Time</td>
          </tr>
        </thead>
        <tbody>
          {playlist.map((song, index) => (
            <tr className="album-info-list"  key={index}>
              <td style={{ width: "40px", textAlign: "center"}}>{song.rank}</td>
              <td style={{padding: '5px'}}>
                <div className="song-info-trending">
                  <img src={song.cover} alt={song.title} className="trending-song-cover" />
                  <div>
                    <strong className="song-title">{song.title}</strong>
                    <p className="song-artist">{song.artist}</p>
                  </div>
                </div>
              </td>
              <td>{song.releaseDate}</td>
              <td>{song.played}</td>
              <td >
                <div className="song-time d-flex gap-2 justify-content-center" >
                  <i className="fa-regular fa-heart" style={{ color: "rgba(238, 16, 176, 1)" }}></i>
                  {song.time}
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
