'use strict';

const express = require('express');
const router = express.Router();
const {
  getUsers,
  createUser,
  createTrip,
  getTrips,
  createOption,
  getTrip,
  addVote,
  getUser,
  userLogin,
} = require('./controllers/user');
const { createFlight, getFlights } = require('./controllers/flight');
const {
  createDestination,
  getDestinations,
  deleteDestinations,
} = require('./controllers/destination');

//USERS
router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:userId', getUser);
router.get('/login/:emailAddress', userLogin);

//Trips
router.post('/trips/:userId', createTrip);
router.get('/trips', getTrips); //get all trips
router.get('/trips/:tripId', getTrip); //get specific trip according to tripId

//Options
router.post('/options', createOption);

//Vote
router.put('/options/:optionId', addVote);

//Flights
router.post('/flights', createFlight);
router.get('/flights', getFlights);

//Destinations
router.post('/destinations', createDestination);
router.get('/destinations', getDestinations);
router.delete('/destinations', deleteDestinations);

module.exports = router;
