const Mongoose = require('mongoose');
const User = require('../models/user.model');
const UserService = require('../services/user.service')



const authenticate = async(req, res, next) => {
    if(!req.body) {
        res.status(404).json({
            message: 'Email and Password are required'
        });
    }

    if(!req.body.email || !req.body.password) {
        res.status(404).json({
            message: 'Email and Password are required'
        });
    }

    const user = await UserService.findUserByEmailAndPassword(req.body.email, req.body.password)
    
    if(!user) {
        res.status(404).json({
            message: 'Invalid credentials'
        });
    } else {
        res.status(200).json({
            message: 'Success',
            data: user
        });
    }

}

module.exports = {
  authenticate
};
