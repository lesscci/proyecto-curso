import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutScreen } from "../components/pages/AboutScreen";
import { CercaScreen } from "../components/pages/CercaScreen";
import { ContactoScreen } from "../components/pages/ContactoScreen";
import { HomeScreen } from "../components/pages/HomeScreen";
import { MatchBarScreen } from "../components/pages/MatchBarScreen";
import { Footer } from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";


export const Router = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/match" element={<MatchBarScreen />} />
          <Route path="/cerca-de-ti" element={<CercaScreen />} />
          <Route path="/contacto" element={<ContactoScreen />} />
        </Routes>
      <Footer />
    </>
  );
};
