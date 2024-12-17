import React from "react";
import ArtistTitle from "../ArtistContainer/ArtistTitle";
import About from "../About/About";
import PopularArtistPlaylist from "../PopularArtistPlaylist/PopularArtistPlaylist";
import ArtistAlbum from "../ArtistAlbum/ArtistAlbum";
import ArtistSingleSong from "../ArtistSingleSong/ArtistSingleSong";
import ArtistPlaylist from "../ArtistPlaylist/ArtistPlaylist";
import ArtistAlsoListen from "../ArtistAlsoListen/ArtistAlsoListen";

export default function ArtistInfo(props) {
    const {setDisplayArtist} = props;
    console.log(typeof(setDisplayArtist));
    
  return (
    <div className="artist-title-container">
      <ArtistTitle setDisplayArtist={setDisplayArtist}></ArtistTitle>
      <div className="artist-content">
        <PopularArtistPlaylist></PopularArtistPlaylist>
        <ArtistAlbum></ArtistAlbum>
        <ArtistSingleSong></ArtistSingleSong>
        <ArtistPlaylist></ArtistPlaylist>
        <ArtistAlsoListen></ArtistAlsoListen>
      </div>
      <About></About>
    </div>
  );
}
