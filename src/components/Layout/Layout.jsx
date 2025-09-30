import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

 

export default function Layout() {
  return (
    <>
      <Navbar />
      
      <main className="container my-4">
        <Outlet /> 
       
      </main>
      <Footer />
    </>
  );
}
