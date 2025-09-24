import React from "react";
import "../styles/Home.css";
import Hero from "../components/Hero";
import TopStories from "../components/TopStories";
import HomeArticles from "../components/HomeArticles";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      {/* 🔥 Big Top Hero */}
      <Hero />

      {/* 🔥 Scrollable Sections */}
      <div className="home-sections">
        <TopStories />
        <HomeArticles />
      </div>

      {/* 🔥 Newsletter */}
      <NewsLetter />

      
    </div>
  );
};

export default Home;
