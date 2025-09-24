// src/pages/NewsPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/NewsPage.css";

const NewsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state;

  if (!article) {
    return (
      <div className="news-page">
        <h2>No article data found ⚠️</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="news-page">
      <h1>{article.title}</h1>
      <p className="news-author">
        {article.author ? `By ${article.author}` : "Unknown Author"} |{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      <img
        className="news-image"
        src={article.urlToImage || "https://via.placeholder.com/600x300"}
        alt={article.title}
      />

      <p className="news-content">{article.content || article.description}</p>

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="read-more"
      >
        🔗 Read full article
      </a>
    </div>
  );
};

export default NewsPage;
