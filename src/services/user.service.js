'use strict'
const Mongoose = require('mongoose');
const User = require('../models/user.model');


const saveUser = async (data) => {
  const user = new User({
    _id: new Mongoose.Types.ObjectId,
    ...data
  });
  
  // Save
  return await user.save();
}

const findUserByEmailAndPassword = async(email, pass) => {
  return await User.findOne({email: email, password: pass})
}

const getUsers = async() => {
    return await User.find()
  }
const getUserById = async(id) => {
  return await User.findById(id)
}


module.exports = {
  saveUser,
  getUsers,
  getUserById,
  findUserByEmailAndPassword
};