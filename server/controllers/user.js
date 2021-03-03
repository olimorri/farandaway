'use-strict'

const { user } = require('../models');

exports.getUsers = async (req, res) => {
  try {
    const users = await user.findAll();
    res.status(200);
    res.send(users);
  } catch (err) {
    console.log(err)
    res.sendStatus(500);
  }
}

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