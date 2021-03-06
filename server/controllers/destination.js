'use-strict';
const { destination } = require('../models');
const { flight } = require('../models');

const destinationData = require('../destinationMockData.json');

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

exports.getDestination = async (req, res) => {
  const { destinationName, startDate } = req.params;
  const month = +startDate.split('-')[1];
  const requestedInfo = [];
  try {
    const selectedDesination = destinationData.map((destination) => {
      if (destination.name === destinationName) {
        requestedInfo.push(+destination.climate[month - 1].tmax);
        requestedInfo.push(+destination.climate[month - 1].days_with_rain);
        requestedInfo.push(destination.img);
        //requestedInfo.push(+destination.climate[month - 1].days_with_rain);
      }
    });
    const flightInfo = await flight.findAll({
      where: { destination: destinationName },
    });
    requestedInfo.push(flightInfo[0].dataValues.minPrice);
    res.status(200);
    res.send(requestedInfo);
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
