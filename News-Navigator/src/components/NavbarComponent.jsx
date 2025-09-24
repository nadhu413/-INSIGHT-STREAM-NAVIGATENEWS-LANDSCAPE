import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import "../styles/Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

const NavbarComponent = () => {
  const [active, setActive] = useState("Home");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") setActive("Home");
    else if (location.pathname.includes("/category/")) {
      const cat = location.pathname.split("/")[2];
      setActive(cat.replace("-", " ").toUpperCase());
    }
  }, [location]);

  const handleSearch = () => {
    if (search.trim()) {
      const formatted = search.toLowerCase().replace(/\s+/g, "-");
      navigate(`/category/${formatted}`);
      setSearch("");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h2 onClick={() => navigate("/")}>SB News</h2>
      </div>

      <div className="navbar__links">
        <p className={active === "HOME" ? "active" : ""} onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate("/category/general")}>General</p>
        <p onClick={() => navigate("/category/technology")}>Technology</p>
        <p onClick={() => navigate("/category/politics")}>Politics</p>
        <p onClick={() => navigate("/category/health")}>Health</p>
        <p onClick={() => navigate("/category/art-culture")}>Art & Culture</p>
      </div>

      <div className="navbar__search">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <IoSearch className="search-icon" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default NavbarComponent;
