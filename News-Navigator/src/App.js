import React from "react";
import { Routes, Route } from "react-router-dom";
import GeneralContextProvider from "./context/GeneralContext";

import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <GeneralContextProvider>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
      <Footer />
    </GeneralContextProvider>
  );
}

export default App;
