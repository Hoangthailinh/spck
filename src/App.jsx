import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SongList from "./components/SongList/SongList";
import NewReleaseSongs from "./components/NewReleaseSongs/NewReleaseSongs";
import TrendingSongs from "./components/TrendingSongs/TrendingSongs";
import PopularArtists from "./components/PopularArtists/PopularArtists";
import MusicVideo from "./components/MusicVideo/MusicVideo";
import TopAlbums from "./components/TopAlbums/TopAlbums";
import MoodPlaylists from "./components/MoodPlaylists/MoodPlaylists";
import JoinOurPlatform from "./components/JoinOurPlatform/JoinOurPlatform";
import About from "./Components/About/About";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Header />
        <Hero />
        <SongList />
        <NewReleaseSongs />
        <TrendingSongs />
        <PopularArtists />
        <MusicVideo />
        <TopAlbums />
        <MoodPlaylists />
        <JoinOurPlatform />
        <div className="separator"></div>
        <About />
      </main>
    </div>
  );
}

export default App;
