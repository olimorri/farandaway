'use-strict';
const { flight } = require('../models');

exports.createFlight = async (req, res) => {
  const {
    origin,
    destination,
    outbound,
    inbound,
    minPrice,
    carrier,
    currency,
  } = req.body;

  try {
    const newFlight = await flight.create({
      origin,
      destination,
      outbound,
      inbound,
      minPrice,
      carrier,
      currency,
    });
    res.status(201);
    res.send(newFlight);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.getFlights = async (req, res) => {
  try {
    const flights = await flight.findAll();
    res.status(200);
    res.send(flights);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
