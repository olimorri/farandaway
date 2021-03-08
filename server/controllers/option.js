'use-strict';

const { option } = require('../models');

exports.createOption = async (req, res) => {
  const {
    title,
    destination,
    budgetRangeMin,
    budgetRangeMax,
    startDate,
    nights,
    isChosen,
    tripId,
  } = req.body;
  try {
    const newOption = await option.create({
      title,
      destination,
      budgetRangeMin,
      budgetRangeMax,
      startDate,
      nights,
      isChosen,
      tripId,
    });
    res.send(newOption);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.addVote = async (req, res) => {
  const optionId = req.params.optionId;
  try {
    const chosenOption = await option.increment('votes', {
      where: {
        id: optionId,
      },
    });
    res.status(200);
    res.send(chosenOption);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
