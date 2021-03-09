'use-strict';

const { trip, option, invitee } = require('../models');

exports.createTrip = async (req, res) => {
  const { title, options } = req.body;
  const userId = req.params.userId;
  try {
    const newTrip = await trip.create({
      title,
      userId,
    });
    options.map((newOption) => {
      const {
        title,
        destination,
        budgetRangeMin,
        budgetRangeMax,
        startDate,
        nights,
        isChosen,
        votes,
      } = newOption;
      const tripId = newTrip.id;
      const addOption = option.create({
        title,
        destination,
        budgetRangeMin,
        budgetRangeMax,
        startDate,
        nights,
        votes,
        isChosen,
        tripId,
      });
    });
    res.send(newTrip);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.getTrips = async (req, res) => {
  try {
    const trips = await trip.findAll({
      include: [
        { model: invitee },
        {
          model: option,
          // model: invitee,
        },
      ],
    });
    res.status(200);
    res.send(trips);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.getTrip = async (req, res) => {
  const tripId = req.params.tripId;
  try {
    const trips = await trip.findAll({
      where: {
        id: tripId,
      },
      include: [option],
    });
    res.status(200);
    res.send(trips);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.deleteTrip = async (req, res) => {
  const tripId = req.params.tripId;
  try {
    await option.destroy({
      where: {
        tripId: tripId,
      },
    });
    await trip.destroy({
      where: {
        id: tripId,
      },
    });
    res.send(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
