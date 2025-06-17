const express = require('express');
const cors = require('cors');

require('dotenv').config();
const db = require('./db');
const appointmentsRoutes = require('./routes/appointments');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/appointments', appointmentsRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
