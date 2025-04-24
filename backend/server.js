const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const dbconn = require('./config/db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
//database connection
dbconn();

// Serve frontend static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
  });
}

app.use('/api/auth', require('./routes/authRoutes'));

app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
