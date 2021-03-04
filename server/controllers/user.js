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
      include: { model: trip, include: {model: option} }
      // include: { model: trip, required: true, include: {model: option} } - this is the option for retrieving only users that include trips
    });
    res.status(200);
    res.send(users);
  } catch (err) {
    console.log(err)
    res.sendStatus(500);
  }
}

//User.findAll({ include: { all: true, nested: true }});

exports.createTrip = async (req, res) => {
  const { title, options } = req.body;
  const userId = req.params.userId;
  try {
    const newTrip = await trip.create({
      title,
      userId
    })
    options.map(newOption => {
      const { title , destination, budgetRangeMin, budgetRangeMax, startDate, nights, isChosen } = newOption
      const tripId = newTrip.id;
      const addOption = option.create({
        title,
        destination,
        budgetRangeMin,
        budgetRangeMax,
        startDate,
        nights,
        isChosen,
        tripId
      })
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
  const { title , destination, budgetRangeMin, budgetRangeMax, startDate, nights, isChosen , tripId } = req.body;
  try {
    const newOption = await option.create({
      title,
      destination,
      budgetRangeMin,
      budgetRangeMax,
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