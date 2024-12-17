import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import About from "../About/About";
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <Outlet />
      <About />
    </div>
  );
}
