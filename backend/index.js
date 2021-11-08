const express = require('express');
const cors = require('cors');
const { db } = require('./conf');
const app = express();

app.use(cors());

app.get('/games', async (req, res) => {
  const { needle } = req.query;
  const [rows] = await db.query(
    'SELECT id, name FROM games WHERE name LIKE ?',
    `%${needle}%`
  );

  res.send(rows);
});

app.listen(5050, () => {
  console.log('API is now mlistening on 5050 !');
});
