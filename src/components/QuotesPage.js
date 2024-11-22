import React, { useState,useEffect } from 'react';
import QuoteList from './QuoteList';
import './QuotePage.css'

function QuotesPage({ selectedType, quotes }) {
  const [currentPage, setCurrentPage] = useState(1);
  const quotesPerPage = 10;


  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedType]); 


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  
  const totalPages = Math.ceil(quotes.length / quotesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      <h1 className='h1list'>{selectedType} Quotes</h1>
      <QuoteList quotes={currentQuotes} />

      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`page-button ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuotesPage;
