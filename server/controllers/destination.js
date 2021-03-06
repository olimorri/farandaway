'use-strict';
const { destination } = require('../models');

exports.createDestination = async (req, res) => {
  const { name, country, emoji, timezone, climate } = req.body;
  try {
    const newDestination = await destination.create({
      name,
      country,
      emoji,
      timezone,
      climate,
    });
    res.status(201);
    res.send(newDestination);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.getDestinations = async (req, res) => {
  try {
    const destinations = await destination.findAll();
    res.status(200);
    res.send(destinations);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.deleteDestinations = async (req, res) => {
  // await destination.destroy({
  //   truncate: true,
  // });
};
