const express = require('express');
const cors = require('cors');
const internshipRoutes = require('./routes/internshipRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Internship REST API',
    documentation: '/api/health'
  });
});

app.get('/api/health', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Internship API is running',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/internships', internshipRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
