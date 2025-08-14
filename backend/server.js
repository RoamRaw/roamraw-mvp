require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dummy trips endpoint for MVP demo (no DB required for now)
app.get('/api/trips', (req, res) => {
  res.json([
    { title: 'Beachside Getaway', description: 'Relax by the sea', date: '2025-09-10' },
    { title: 'Mountain Hike', description: 'Explore the wild', date: '2025-09-18' }
  ]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));
