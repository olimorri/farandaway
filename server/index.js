'use strict';

const express = require('express');
const app = new express();

//TODO: const router = require('./router');
const PORT = 3000;

app.use(express.json());
//TODO: app.use(router); - remove this once router created

(async function () {
  try {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT} 🚀😍`)
    })
  } catch (err) {

  }
}) ();