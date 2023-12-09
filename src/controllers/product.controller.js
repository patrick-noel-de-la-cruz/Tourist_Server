const Mongoose = require('mongoose');
const Product = require('../models/user.model');
const ProductService = require('../services/product.service')

const getProducts = async (req, res, next) => {
    const products = await ProductService.getProducts()
    if(!products) {
        res.status(404).json({
            message: 'Products not found'
        });
    }
    res.status(200).json({
        message: 'Successfully fetched products',
        data: products
    });

};


const getProductById = async(req, res, next) => {
    const product = await ProductService.findById(req.params.id)
    if(!product) {
        res.status(404).json({
            message: 'Products not found'
        });
    }

    res.status(200).json({
        message: 'Successfully fetched products',
        data: product
    });
}

module.exports = {
  getProducts,
  getProductById
};
