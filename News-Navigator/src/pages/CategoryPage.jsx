// src/pages/CategoryPage.jsx
import React, { useEffect, useState, useContext } from "react";
import "../styles/CategoryPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { Pagination, Spinner } from "react-bootstrap";
import { GeneralContext } from "../context/GeneralContext";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { fetchNews } = useContext(GeneralContext);

  const [categoryNews, setCategoryNews] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (id) {
      fetchNews(id).then(data => setCategoryNews(data));
      setActivePage(1);
    }
  }, [id, fetchNews]);

  const itemsPerPage = 21;
  const totalPages = Math.ceil(categoryNews.length / itemsPerPage);

  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => setActivePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const startIdx = (activePage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentArticles = categoryNews.slice(startIdx, endIdx);

  return (
    <div className="category-page">
      <div className="category-header">
        <div>
          <p onClick={() => navigate("/")}>Home</p>
          <p>/</p>
          <p>{id}</p>
        </div>
        <h3>{id.toUpperCase()}</h3>
      </div>

      {categoryNews.length > 0 ? (
        <div className="category-articles">
          {currentArticles.map((article, idx) => (
            <div
              className="category-article"
              key={idx}
              onClick={() => navigate(`/news/${article.title}`, { state: article })}
            >
              <img
                src={article.urlToImage || "https://via.placeholder.com/300x200?text=No+Image"}
                alt={article.title || "news"}
              />
              <p>{article.title ? article.title.slice(0, 60) + "..." : "Untitled"}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="spinners">
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" size="sm" />
        </div>
      )}

      {totalPages > 1 && (
        <div className="pagination-container">
          <p>Page:</p>
          <Pagination>{items}</Pagination>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
