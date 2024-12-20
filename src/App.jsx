import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Page/Home";
import Discover from "./Page/Discover";
import Albums from "./Page/Albums";
import Artists from "./Page/Artists";
import Login from "./Page/LoginPage/LoginPage";
import SignUp from "./Page/SignUp/SignUp";
import LoadingPage from "./Components/LoadingPage/LoadingPage";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword"; // Import ForgotPassword
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import "./App.css";
import Setting from "./Components/Setting/Setting";
import Premium from "./Components/Premium/Premium";
import PurchasePro from "./Components/PurchasePro/PurchasePro";
import PurchasePlus from "./Components/PurchasePlus/PurchasePlus";
import Payment from "./Components/Payment/Payment";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="app">
      <main className="content">
        {isLoading ? (
          <LoadingPage />
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />}></Route>
              <Route path="/discover" element={<Discover />}></Route>
              <Route path="/settings" element={<Setting/>}></Route>
              <Route path="/premium" element={<Premium/>}></Route>
              <Route path="/premium/purchase_plus" element={<PurchasePlus/>}></Route>
              <Route path="/premium/purchase_pro" element={<PurchasePro/>}></Route>
              <Route path="/payment" element={<Payment/>}></Route>
            </Route>
            <Route path="/albums" element={<Albums />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> 
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
