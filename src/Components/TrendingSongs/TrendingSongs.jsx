import React from "react";
import { FaHeart } from "react-icons/fa"; // Sử dụng biểu tượng trái tim từ react-icons
import "./TrendingSongs.css";

function TrendingSongs() {
  // Dữ liệu giả cho danh sách bài hát thịnh hành
  const songs = [
    {
      rank: "#1",
      title: "Softcore",
      artist: "The Neighborhood",
      releaseDate: "Nov 4, 2023",
      album: "Hard to Imagine the Neighbourhood Ever Changing",
      time: "3:26",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 1.png",
    },
    {
      rank: "#2",
      title: "Skyfall Beats",
      artist: "nightmares",
      releaseDate: "Oct 26, 2023",
      album: "nightmares",
      time: "2:45",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 2.png",
    },
    {
      rank: "#3",
      title: "Greedy",
      artist: "Tate McRae",
      releaseDate: "Dec 30, 2023",
      album: "Greedy",
      time: "2:11",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 3.png",
    },
    {
      rank: "#4",
      title: "Lovin On Me",
      artist: "Jack Harlow",
      releaseDate: "Dec 30, 2023",
      album: "Lovin On Me",
      time: "2:18",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 4.png",
    },
    {
      rank: "#5",
      title: "Paint the Town Red",
      artist: "Doja Cat",
      releaseDate: "Dec 29, 2023",
      album: "Paint The Town Red",
      time: "3:51",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 6.png",
    },
    {
      rank: "#6",
      title: "Dance On Night",
      artist: "Dua Lipa",
      releaseDate: "May 27, 2023",
      album: "Dance The Night (From Barbie Movie)",
      time: "2:56",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7.png",
    },
    {
      rank: "#7",
      title: "Water",
      artist: "Tyla",
      releaseDate: "Dec 10, 2023",
      album: "Water",
      time: "3:20",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 8.png",
    },
  ];

  return (
    <div className="trending-songs-container">
      <h2 className="section-title">
        Trending <span className="highlight">Songs</span>
      </h2>
      <table className="trending-songs-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Song</th>
            <th>Release Date</th>
            <th>Album</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{song.rank}</td>
              <td>
                <div className="song-info">
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="trending-song-cover"
                  />
                  <div>
                    <strong className="song-title">{song.title}</strong>
                    <span className="song-artist">{song.artist}</span>
                  </div>
                </div>
              </td>
              <td>{song.releaseDate}</td>
              <td>{song.album}</td>
              <td>
                <div className="song-time">
                  <FaHeart className="heart-icon" />
                  {song.time}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="view-all-btn">+ View All</button>
    </div>
  );
}

export default TrendingSongs;
