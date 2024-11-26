import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Home from "./Page/Home";
import Discover from "./Page/Discover";
import Albums from "./Page/Albums";
import Artists from "./Page/Artists";
import Login from "./Page/LoginPage/LoginPage";
import SignUp from "./Page/SignUp/SignUp";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword"; // Import ForgotPassword
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation(); // Sử dụng useLocation để lấy đường dẫn hiện tại

  // Kiểm tra nếu là trang /login, /forgot-password hoặc /loading thì ẩn Sidebar và Header
  const hideSidebarAndHeader =
    location.pathname === "/login" ||
    location.pathname === "/forgot-password" ||
    isLoading;

  return (
    <div className="app">
      {!hideSidebarAndHeader && <Sidebar />}
      <main className="content">
        {!hideSidebarAndHeader && <Header setIsLoading={setIsLoading} />}
        {isLoading ? (
          <LoadingPage />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
