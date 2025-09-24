import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("midnight-gold");
  const [topNews, setTopNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "midnight-gold" ? "light" : "midnight-gold"));
  };

  // ✅ Correct way for CRA
 const API_KEY = '4bb768dfbfe24732a6ac562777dffda1';
  console.log("🔑 Loaded API Key:", API_KEY);
  const BASE_URL = "https://newsapi.org/v2/everything";

  const fetchNews = async (category) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}?q=${category}&apiKey=${API_KEY}`);
      setIsLoading(false);
      return res.data.articles || [];
    } catch (err) {
      console.error("Error fetching news:", err);
      setIsLoading(false);
      return [];
    }
  };

  useEffect(() => {
    const fetchInitialNews = async () => {
      const data = await fetchNews("general");
      setTopNews(data);
    };
    fetchInitialNews();
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        topNews,
        currentCategory,
        setCurrentCategory,
        searchTerm,
        setSearchTerm,
        theme,
        toggleTheme,
        fetchNews,
        isLoading,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
