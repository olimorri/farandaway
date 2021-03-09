'use-strict';
const { invitee, trip, option } = require('../models');
const { Op } = require('sequelize');

exports.addInvitee = async (req, res) => {
  const { emailAddress, userId } = req.body;
  const { tripId } = req.params;
  try {
    const newInvitee = await invitee.create({
      emailAddress,
      userId,
      tripId,
    });
    res.send(newInvitee);
    res.status(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.getInviteeTrips = async (req, res) => {
  const { userId } = req.params;
  const userTrips = [];
  try {
    const inviteeTrips = await trip.findAll({
      include: [
        {
          model: invitee,
          where: {
            userId: userId,
          },
        },
        { model: option },
      ],
    });
    inviteeTrips.map((trip) => {
      const tripId = trip.id;
      const selectedTrip = () => {
        trip.findAll({
          where: {
            id: tripId,
          },
          include: [{ model: option }],
        });
      };
      userTrips.push(trip);
    });
    res.status(200);
    res.send(userTrips);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
