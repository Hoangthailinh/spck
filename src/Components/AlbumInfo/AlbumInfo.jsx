import React from "react";
import "./AlbumInfo.css";
import About from "../About/About";
import { useNavigate } from "react-router-dom";

function AlbumInfo(props) {
  const songs = [
    {
      rank: "1",
      title: "Softcore",
      artist: "The Neighborhood",
      releaseDate: "Nov 4, 2023",
      album: "Hard to Imagine the Neighbourhood Ever Changing",
      time: "3:26",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 1.png",
    },
    {
      rank: "2",
      title: "Skyfall Beats",
      artist: "nightmares",
      releaseDate: "Oct 26, 2023",
      album: "nightmares",
      time: "2:45",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 2.png",
    },
    {
      rank: "3",
      title: "Greedy",
      artist: "Tate McRae",
      releaseDate: "Dec 30, 2023",
      album: "Greedy",
      time: "2:11",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 3.png",
    },
    {
      rank: "4",
      title: "Lovin On Me",
      artist: "Jack Harlow",
      releaseDate: "Dec 30, 2023",
      album: "Lovin On Me",
      time: "2:18",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 4.png",
    },
    {
      rank: "5",
      title: "Paint the Town Red",
      artist: "Doja Cat",
      releaseDate: "Dec 29, 2023",
      album: "Paint The Town Red",
      time: "3:51",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 8.png",
    },
    {
      rank: "6",
      title: "Dance On Night",
      artist: "Dua Lipa",
      releaseDate: "May 27, 2023",
      album: "Dance The Night (From Barbie Movie)",
      time: "2:56",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 6.png",
    },
    {
      rank: "7",
      title: "Water",
      artist: "Tyla",
      releaseDate: "Dec 10, 2023",
      album: "Water",
      time: "3:20",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (1).png",
    },
    {
      rank: "8",
      title: "Push your limits",
      artist: "Brian michael",
      releaseDate: "Jan 2, 2024",
      album: "Push your limits",
      time: "2:24",
      cover: "./pushyourlimit.png",
    },
    {
      rank: "9",
      title: "Houdini",
      artist: "Dualipa",
      releaseDate: "Dec 12, 2023",
      album: "Houdini",
      time: "3:05",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (1).png",
    },
    {
      rank: "10",
      title: "Lala",
      artist: "Myke towers",
      releaseDate: "Nov 20, 2023",
      album: "La vida es una",
      time: "3:17",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (2).png",
    },
    {
      rank: "11",
      title: "I Wanaa Be Yours",
      artist: "Arctic monkeys",
      releaseDate: "Sep 9, 2023",
      album: "AM",
      time: "3:03",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (3).png",
    },
    {
      rank: "12",
      title: "Paradise",
      artist: "Braaheim",
      releaseDate: "Jul 5, 2023",
      album: "Paradise",
      time: "2:30",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (4).png",
    },
    {
      rank: "13",
      title: "As It Was",
      artist: "Harry Styles",
      releaseDate: "Sep 14, 2022",
      album: "As It Was",
      time: "2:47",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (5).png",
    },
    {
      rank: "14",
      title: "Another Love",
      artist: "Tom Odell",
      releaseDate: "Dec 19, 2013",
      album: "Another Love",
      time: "4:06",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (6).png",
    },
    {
      rank: "15",
      title: "Daylight",
      artist: "David Kushner",
      releaseDate: "Jun 16, 2022",
      album: "Daylight",
      time: "3:32",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (7).png",
    },
    {
      rank: "16",
      title: "Beggin",
      artist: "Måneskin",
      releaseDate: "Feb 27, 2017",
      album: "Chosen",
      time: "3:31",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (8).png",
    },
    {
      rank: "17",
      title: "What Was I Made For",
      artist: "Billie Eilish",
      releaseDate: "Sep 6, 2023",
      album: "What Was I Made For",
      time: "3:42",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (9).png",
    },
    {
      rank: "18",
      title: "Daddy Issues",
      artist: "The Neighbourhood",
      releaseDate: "Aug 21, 2015",
      album: "Wiped out",
      time: "4:20",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (10).png",
    },
    {
      rank: "19",
      title: "Rolling In The Deep",
      artist: "Adele",
      releaseDate: "Jun 5, 2011",
      album: "Adele 21",
      time: "3:48",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (11).png",
    },
    {
      rank: "20",
      title: "OneShot",
      artist: "mhst",
      releaseDate: "Dec 14, 2023",
      album: "Toca Donka",
      time: "1:15",
      cover: "./The_Neighbourhood_-_The_Neighbourhood 7 (12).png",
    },
  ];
  const {setDisplayInfo} = props;
  return (
    <div className="album-info-container">
      <div className="album-info-title">
        <div className="album-info-title-header d-flex align-items-center justify-content-between">
          <i className="fa-solid fa-arrow-left" onClick={ () => setDisplayInfo(false)} style={{cursor: "pointer"}}></i>
          <div className="d-flex align-items-center gap-4">
            <a href="#share">Share</a>
            <a href="#about">About</a>
            <a href="#premium">Premium</a>
          </div>
        </div>
        <div className="album-info-title-des d-flex align-items-end justify-content-between">
          <div className="album-info-name-img d-flex gap-5">
            <img src="1600w-v8lIutrL57g 1.svg" alt="" />
            <div className="album-info-name">
              <p>
                Trending songs <span>mix</span>
              </p>
              <p>tate mcree, nightmares, the neighberhood, doja cat and ...</p>
              <div className="d-flex gap-4">
                <p>20 songs</p>
                <p style={{ color: "rgba(238, 16, 176, 1)" }}>●</p>
                <p>1h 36m</p>
              </div>
            </div>
          </div>
          <div className="album-info-play-all d-flex align-items-center gap-3">
            <h3>Play All</h3>
            <i className="fa-regular fa-circle-play" style={{ fontSize: "50px" }}></i>
          </div>
        </div>
      </div>
      <div className="album-info-content">
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0px 10px" }}>
          <thead>
            <tr>
              <td></td>
              <td></td>
              <td>Release Date</td>
              <td style={{ textAlign: "center" }}>Album</td>
              <td style={{ textAlign: "center" }}>Time</td>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr className="album-info-list" key={index}>
                <td style={{ width: "40px", textAlign: "center" }}>{song.rank}</td>
                <td style={{padding: '5px'}}>
                  <div className="song-info-trending d-flex align-items-center">
                    <img src={song.cover} alt={song.title} className="trending-song-cover" />
                    <div>
                      <strong className="song-title">{song.title}</strong>
                      <p className="song-artist">{song.artist}</p>
                    </div>
                  </div>
                </td>
                <td>{song.releaseDate}</td>
                <td>{song.album}</td>
                <td>
                  <div className="song-time d-flex gap-2 justify-content-center">
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
      <About></About>
    </div>
  );
}
export default AlbumInfo;
