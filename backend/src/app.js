const express = require('express');
const cors = require('cors');
const db = require('./db');
const env_value = process.env.ENV;

const app = express()
app.use(cors())

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM your_table');
    console.log(result);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/env', (req, res) => {
  res.send({'ENV': env_value});
});

app.listen(4000, () => {
  console.log('using port 4000');
});