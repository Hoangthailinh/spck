import React from "react";
import MusicGenres from "../components/MusicGenres/MusicGenres";
import MoodPlaylists from "../components/MoodPlaylists/MoodPlaylists";
import PopularArtists from "../components/PopularArtists/PopularArtists";
import MusicVideo from "../components/MusicVideo/MusicVideo";
import NewReleaseSongs from "../components/NewReleaseSongs/NewReleaseSongs";
import NewAlbums from "../Components/NewAlbums/NewAlbums";
import About from "../components/About/About";

function Discover() {
  return (
    <div>
      <MusicGenres />
      <MoodPlaylists />
      <PopularArtists />
      <MusicVideo />
      <NewReleaseSongs />
      <NewAlbums />
      <About />
    </div>
  );
}

export default Discover;
