import React from "react";
import "../styles/Hero.css";
import { GeneralContext } from "../context/GeneralContext";
import Spinner from "react-bootstrap/Spinner";

const Hero = () => {
  const { topNews } = React.useContext(GeneralContext);

  if (!topNews || topNews.length < 6) {
    return (
      <div className="spinners">
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
      </div>
    );
  }

  return (
    <div className="Hero-container">
      <div
        className="hero-article-1"
        onClick={() => window.open(topNews[0].url, "_blank")}
      >
        <img
          src={topNews[0].urlToImage || "https://via.placeholder.com/400x200"}
          alt={topNews[0].title}
        />
        <h3>{topNews[0].title}</h3>
      </div>

      <div className="hero-article-2">
        {topNews.slice(1, 5).map((article, idx) => (
          <div
            className="hero-article-small"
            key={idx}
            onClick={() => window.open(article.url, "_blank")}
          >
            <img
              src={article.urlToImage || "https://via.placeholder.com/200x100"}
              alt={article.title}
            />
            <p>{article.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;