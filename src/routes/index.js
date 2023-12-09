const express = require('express');
const router = express.Router();

const ProductRouter = require('./product.route')
const AuthenticateRouter = require('./authenticate.route')

router.use('/products', ProductRouter);
router.use('/auth', AuthenticateRouter);

module.exports = router;