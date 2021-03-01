'use strict';

const express = require('express');
const app = new express();

const PORT = 3000;

(async function () {
  try {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT} 🚀😍`)
    })
  } catch (err) {

  }
}) ();