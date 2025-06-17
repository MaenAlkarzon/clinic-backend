import db from './db.js';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const appointmentsRoutes = require('./routes/appointments');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/appointments', appointmentsRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

db.connect.then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})
