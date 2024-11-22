import React, { useState, useEffect } from 'react';

const CaptionsPage = ({ page, setPage }) => {
  const [captions, setCaptions] = useState([]);
  const [totalPages, setTotalPages] = useState(5); // Total pages (mocked as 5 here)

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchCaptions = async () => {
      const mockCaptions = Array.from({ length: 50 }, (_, i) => `Caption ${i + 1}`); // 50 captions
      const start = (page - 1) * 10;
      const end = start + 10;
      setCaptions(mockCaptions.slice(start, end));
    };
    
    fetchCaptions();
  }, [page]);

  return (
    <div>
      <h1>Captions</h1>
      <ul>
        {captions.map((caption, index) => (
          <li key={index}>{caption}</li>
        ))}
      </ul>
      <div className="pagination">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CaptionsPage;
