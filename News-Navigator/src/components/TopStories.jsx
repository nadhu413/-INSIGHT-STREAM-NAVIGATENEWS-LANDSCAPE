import React from "react";
import "../styles/TopStories.css";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";
import { Spinner } from "react-bootstrap";

const TopStories = () => {
  const navigate = useNavigate();
  const { topNews } = React.useContext(GeneralContext);

  return (
    <div className="top-stories-container">
      <h3>Top Stories</h3>

      {topNews && topNews.length > 0 ? (
        <div className="top-stories">
          {topNews.slice(0, 10).map((article, index) => (
            <div
              className="top-story"
              key={index}
              onClick={() => window.open(article.url, "_blank")}
            >
              <img
                src={
                  article.urlToImage || "https://via.placeholder.com/150x100?text=No+Image"
                }
                alt={article.title || "Top story"}
              />
              <p>{article.title ? article.title.slice(0, 40) + "..." : "Untitled"}</p>
            </div>
          ))}
          <button onClick={() => navigate("/category/trending")}>View more</button>
        </div>
      ) : (
        <div className="spinners">
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
        </div>
      )}
    </div>
  );
};

export default TopStories;
