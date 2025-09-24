import React from "react";
import "../styles/HomeArticles.css";
import { GeneralContext } from "../context/GeneralContext";
import Spinner from "react-bootstrap/Spinner";

const HomeArticles = () => {
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
    <div className="HomeArticles-container">
      <div
        className="home-article-1"
        onClick={() => window.open(topNews[1].url, "_blank")}
      >
        <img
          src={topNews[1].urlToImage || "https://via.placeholder.com/400x200"}
          alt={topNews[1].title}
        />
        <h3>{topNews[1].title}</h3>
      </div>

      <div className="home-article-2">
        {topNews.slice(2, 6).map((article, idx) => (
          <div
            className="home-article-small"
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

export default HomeArticles;
