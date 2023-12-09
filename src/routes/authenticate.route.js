const express = require('express');
const router = express.Router();
const AuthenticateController = require('../controllers/authentication.controller');

router.post('/login', AuthenticateController.authenticate);

module.exports = router;
