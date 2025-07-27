// backend/index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./config/db'); // PostgreSQL DB connection
const inventoryRoutes = require('./routes/inventoryroutes'); // Product routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Inventory Management System Backend is running...');
});

// DB test route
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Inventory routes
app.use('/api', inventoryRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
