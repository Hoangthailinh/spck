import React from "react";
import Hero from "../components/Hero/Hero";
import SongList from "../components/SongList/SongList";
import NewReleaseSongs from "../components/NewReleaseSongs/NewReleaseSongs";
import TrendingSongs from "../components/TrendingSongs/TrendingSongs";
import PopularArtists from "../components/PopularArtists/PopularArtists";
import MusicVideo from "../components/MusicVideo/MusicVideo";
import TopAlbums from "../components/TopAlbums/TopAlbums";
import MoodPlaylists from "../components/MoodPlaylists/MoodPlaylists";
import JoinOurPlatform from "../components/JoinOurPlatform/JoinOurPlatform";
import About from "../components/About/About";

function Home() {
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
      <About />
    </div>
  );
}

export default Home;
