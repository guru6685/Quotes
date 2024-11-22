const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Default quotes route
app.get('/api/quotes', async (req, res) => {
  try {
    const response = await fetch('https://zenquotes.io/api/quotes/');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
