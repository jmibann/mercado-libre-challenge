require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/items', require('./routes/search'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));