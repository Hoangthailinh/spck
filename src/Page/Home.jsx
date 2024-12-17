import React from "react";
import Hero from "../components/Hero/Hero";
import SongList from "../components/SongList/SongList";
import NewReleaseSongs from "../components/NewReleaseSongs/NewReleaseSongs";
import TrendingSongs from "../Components/TrendingSongs/TrendingSongs";
import PopularArtists from "../components/PopularArtists/PopularArtists";
import MusicVideo from "../components/MusicVideo/MusicVideo";
import TopAlbums from "../components/TopAlbums/TopAlbums";
import MoodPlaylists from "../components/MoodPlaylists/MoodPlaylists";
import JoinOurPlatform from "../Components/JoinOurPlatform/JoinOurPlatform";

function Home() {
  if (localStorage.getItem("loginStatus") === null) {
    localStorage.setItem("loginStatus", false);
  }
  return (
    <div>
      <Hero />
      <SongList />
      <NewReleaseSongs />
      <TrendingSongs />
      <PopularArtists />
      <MusicVideo />
      <TopAlbums />
      <MoodPlaylists />
      <JoinOurPlatform />
    </div>
  );
}

export default Home;
