const User = require('../models/User');

exports.CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  }
  catch (error) {
    res.status(500).send(error.message);
  }
}

exports.UpdateUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      }
    });

    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    await user.save();

    res.status(200).json(user);
  }
  catch (error) {
    res.status(500).send(error.message);
  }
}

exports.DeleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id
      }
    });

    if (user > 0)
      res.status(200).send(true);
    else
      res.status(400).send(false);
  }
  catch (error) {
    res.status(500).send(error.message);
  }
}

exports.GetByIdUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      }
    });

    res.status(200).json(user);
  }
  catch (error) {
    res.status(500).send(error.message);
  }
}

exports.GetAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  }
  catch (error) {
    res.status(500).send(error.message);
  }
};