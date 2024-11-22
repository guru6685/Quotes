import React from "react";
import "./HomePage.css";
import backgroundImage from '../images2.jpg'; // Import your image


const HomePage = () => (
  <div className="home-page">
    {/* Header Section */}
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Welcome to the World of Quotes</h1>
        <p className="header-subtitle">Inspire and be inspired with the best quotes!</p>
      </div>
    </header>

    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="quotes-container">
        <div className="quote">"In the middle of difficulty lies opportunity." – Albert Einstein</div>
        <div className="quote">"Life is what happens when you're busy making other plans." – John Lennon</div>
        <div className="quote">"Success is not the key to happiness. Happiness is the key to success." – Albert Schweitzer</div>
        <div className="quote">"It does not matter how slowly you go as long as you do not stop." – Confucius</div>
        <div className="quote">"The best way to predict the future is to create it." – Peter Drucker</div>
        <div className="quote">"You miss 100% of the shots you don’t take." – Wayne Gretzky</div>
        <div className="quote">"Believe you can and you’re halfway there." – Theodore Roosevelt</div>
        <div className="quote">"Hardships often prepare ordinary people for an extraordinary destiny." – C.S. Lewis</div>
        <div className="quote">"Start where you are. Use what you have. Do what you can." – Arthur Ashe</div>
        <div className="quote">"With the new day comes new strength and new thoughts." – Eleanor Roosevelt</div>
      </div>
    </div>

  
    <div className="quote-action">
      <a href="/quotes" className="quote-action-link">
        <div className="action-box">
          <h2>Explore Quotes</h2>
          <p>Click here to discover more quotes from different categories!</p>
        </div>
      </a>
    </div>
  </div>
);

export default HomePage;
