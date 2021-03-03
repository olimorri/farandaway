'use-strict'

const { user, trip, option } = require('../models');

exports.createUser = async (req,res) => {
  const { emailAddress, firstName, lastName, password } = req.body;
  try {
    const newUser = await user.create({ emailAddress, firstName, lastName, password });
    res.send(newUser);
    res.status(200);
  } catch (err) {
    console.log(err)
    res.sendStatus(500);
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await user.findAll({
      include: [trip]
    });
    res.status(200);
    res.send(users);
  } catch (err) {
    console.log(err)
    res.sendStatus(500);
  }
}

exports.createTrip = async (req, res) => {
  const { title , userId } = req.body;
  try {
    const newTrip = await trip.create({
      title,
      userId
    })
    res.send(newTrip);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

exports.getTrips = async (req, res) => {
  try {
    const trips = await trip.findAll({
      include: [option]
    });
    res.status(200);
    res.send(trips);
  } catch (err) {
    console.log(err)
    res.sendStatus(500);
  }
}

exports.createOption = async (req, res) => {
  console.log(req.body)
  const { title , destination, budgetRange, startDate, nights, isChosen , tripId } = req.body;
  try {
    const newOption = await option.create({
      title,
      destination,
      budgetRange,
      startDate,
      nights,
      isChosen,
      tripId
    })
    res.send(newOption);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}