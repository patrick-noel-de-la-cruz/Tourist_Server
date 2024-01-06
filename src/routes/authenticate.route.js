const express = require('express');
const router = express.Router();
const AuthenticateController = require('../controllers/authentication.controller');

router.post('/login', AuthenticateController.authenticate);
router.post('/register', AuthenticateController.register);

module.exports = router;
