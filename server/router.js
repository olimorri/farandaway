'use strict';

const express = require('express');
const router = express.Router();
const {
  getUsers,
  createUser,
  getUser,
  userLogin,
  deleteUser,
} = require('./controllers/user');
const {
  createTrip,
  getTrips,
  getTrip,
  deleteTrip,
} = require('./controllers/trip');
const { createFlight, getFlights } = require('./controllers/flight');
const { createOption, addVote } = require('./controllers/option');
const {
  createDestination,
  getDestination,
  deleteDestinations,
} = require('./controllers/destination');
const { addInvitee, getInviteeTrips } = require('./controllers/invitee');

//Users
router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:userId', getUser);
router.get('/login/:emailAddress', userLogin);
router.delete('/deleteUser/:userId', deleteUser);

//Trips
router.post('/trips/:userId', createTrip);
router.get('/trips', getTrips); //get all trips
router.get('/trips/:tripId', getTrip); //get specific trip according to tripId
router.delete('/deleteTrip/:tripId', deleteTrip);
//Options
router.post('/options', createOption);

//Vote
router.put('/options/:optionId', addVote);

//Flights
router.post('/flights', createFlight);
router.get('/flights', getFlights);

//Destinations
router.post('/destinations', createDestination);
router.get('/additionalInfo/:destinationName/:startDate', getDestination);
router.delete('/destinations', deleteDestinations);

//Invitees
router.post('/addFriend/:tripId', addInvitee);
router.get('/inviteeTrips/:userId', getInviteeTrips);

module.exports = router;
