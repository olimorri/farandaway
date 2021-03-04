'use strict';

const express = require('express');
const router = express.Router();
const { getUsers, createUser, createTrip, getTrips, createOption } =  require('./controllers/user');

//USERS
router.get('/users', getUsers);
router.post('/users', createUser)

//Trips
router.post('/trips/:userId', createTrip);
router.get('/trips', getTrips);

//Options
router.post('/options', createOption);


module.exports = router;