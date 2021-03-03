'use strict';

const express = require('express');
const app = new express();
const db = require('./models/index');

const router = require('./router');
const PORT = 3000;

app.use(express.json());
app.use(router);

(async function () {
  try {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT} 🚀😍`)
    })
    try {
      await db.sequelize.authenticate();
      await db.sequelize.sync();
      console.log('Connection to db successful 🗄🔎');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  } catch (err) {
    console.log(err)
  }
}) ();