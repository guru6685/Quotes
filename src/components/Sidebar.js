import React from 'react';
import './Sidebar.css';

function Sidebar({ setSelectedType }) {
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="sidebar">
      <h2>Quote Categories</h2>
      <div className="button-list">
        <button className="category-button random-button" onClick={() => handleTypeChange('Random')}>Random</button>
        <button className="category-button inspirational-button" onClick={() => handleTypeChange('Inspirational')}>Inspirational</button>
        <button  className="category-button motivational-button" onClick={() => handleTypeChange('Motivational')}>Motivational</button>
        <button className="category-button friendship-button" onClick={() => handleTypeChange('Friendship')}>Friendship</button>
        <button className="category-button life-button" onClick={() => handleTypeChange('Life')}>Life</button>
        <button className="category-button happiness-button" onClick={() => handleTypeChange('Happiness')}>Happiness</button>
        <button className="category-button success-button" onClick={() => handleTypeChange('Success')}>Success</button>
      </div>
    </div>
  );
}

export default Sidebar;
