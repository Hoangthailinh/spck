import React from "react";
import MusicGenres from "../components/MusicGenres/MusicGenres";
import MoodPlaylists from "../components/MoodPlaylists/MoodPlaylists";
import PopularArtists from "../components/PopularArtists/PopularArtists";
import MusicVideo from "../components/MusicVideo/MusicVideo";
import NewReleaseSongs from "../components/NewReleaseSongs/NewReleaseSongs";
import NewAlbums from "../Components/NewAlbums/NewAlbums";


function Discover() {
  return (
    <div>
      <MusicGenres />
      <MoodPlaylists />
      <PopularArtists />
      <MusicVideo />
      <NewReleaseSongs />
      <NewAlbums />
     
    </div>
  );
}

export default Discover;
