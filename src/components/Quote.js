import React from 'react';

function Quote({ quote }) {
  const isFromAPI = quote.q && quote.a; 

  return (
    <div className="quote-item">
      <p>"{isFromAPI ? quote.q : quote.content}"</p>
      <h4>- {isFromAPI ? quote.a : quote.author}</h4>
    </div>
  );
}

export default Quote;
