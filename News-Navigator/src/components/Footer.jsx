import React from "react";
import "../styles/Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goTo = (cat) => navigate(`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`);

  return (
    <footer>
      <div className="footer">
        <ul>
          <li onClick={() => goTo("general")}>General</li>
          <li onClick={() => goTo("technology")}>Technology</li>
          <li onClick={() => goTo("science")}>Science</li>
        </ul>
        <ul>
          <li onClick={() => goTo("lifestyle")}>Lifestyle</li>
          <li onClick={() => goTo("health")}>Health</li>
          <li onClick={() => goTo("fitness")}>Fitness</li>
        </ul>
        <ul>
          <li onClick={() => goTo("business")}>Business</li>
          <li onClick={() => goTo("stock-markets")}>Stock Markets</li>
          <li onClick={() => goTo("exchanges")}>Exchanges</li>
        </ul>
        <ul>
          <li onClick={() => goTo("geo-politics")}>Geo-Politics</li>
          <li onClick={() => goTo("wars")}>Wars</li>
          <li onClick={() => goTo("current-affairs")}>Current Affairs</li>
        </ul>
      </div>
      <hr />
      <p>SB News - &copy; 2023 - All rights reserved</p>
    </footer>
  );
};

export default Footer;
