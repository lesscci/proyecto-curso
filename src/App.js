import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/ui/Footer";
import { Navbar } from "./components/ui/Navbar";
import { Router } from "./routes/Router";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
