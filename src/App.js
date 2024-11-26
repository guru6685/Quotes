import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import QuotesPage from './components/QuotesPage';
import './App.css';


function App() {
  const [quotes, setQuotes] = useState([]);
  const [selectedType, setSelectedType] = useState('Random'); 

  useEffect(() => {
    const fetchQuotesFromAPI = async () => {
      try {
        const response = await fetch("https://zenquotes.io/api/quotes/");
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    const fetchQuotesFromStorage = async () => {
      try {
        const response = await fetch('./storage.json'); 
        const data = await response.json();
        setQuotes(data[selectedType] || []);
      } catch (error) {
        console.error("Error fetching quotes from storage:", error);
      }
    };

    if (selectedType === 'Random') {
      fetchQuotesFromAPI();
    } else {
      fetchQuotesFromStorage();
    }
  }, [selectedType]); 

  return (
    <Router>
      <Navbar />
      <div className="app-layout">
        <ConditionalSidebar setSelectedType={setSelectedType} />
        <div className="content">
          <Routes>
            <Route className="home-page" path="/" element={<HomePage />} />
            <Route
              path="/quotes"
              element={<QuotesPage selectedType={selectedType} quotes={quotes} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function ConditionalSidebar({ setSelectedType }) {
  const location = useLocation();

  return location.pathname !== '/' ? <Sidebar setSelectedType={setSelectedType} /> : null;
}

export default App;
