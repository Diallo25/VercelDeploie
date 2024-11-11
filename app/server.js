require('dotenv').config();
const express = require('express');
const next = require('next');
const connectDB = require('./db');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

// Connect to MongoDB
connectDB();

app.prepare().then(() => {
  server.use(express.json());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
  });
});
