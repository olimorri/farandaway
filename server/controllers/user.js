'use-strict';

const { user, trip, option } = require('../models');

exports.createUser = async (req, res) => {
  const { emailAddress, firstName, lastName, password } = req.body;
  try {
    const newUser = await user.create({
      emailAddress,
      firstName,
      lastName,
      password,
    });
    res.send(newUser);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await user.findAll({
      include: { model: trip, include: { model: option } },
      // include: { model: trip, required: true, include: {model: option} } - this is the option for retrieving only users that include trips
    });
    res.status(200);
    res.send(users);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
//User.findAll({ include: { all: true, nested: true }});

exports.getUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const users = await user.findAll({
      where: {
        id: userId,
      },
      include: {
        model: trip,
        include: { model: option },
      },
    });
    res.status(200);
    res.send(users);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.userLogin = async (req, res) => {
  const { password } = req.headers;
  const { emailAddress } = req.params;
  try {
    const users = await user.findAll({
      where: {
        emailAddress: emailAddress,
      },
    });
    res.status(200);
    res.send(users);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    await user.destroy({
      where: {
        id: userId,
      },
    });
    res.status(200);
    res.send();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
