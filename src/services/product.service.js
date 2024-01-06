'use strict'
const Mongoose = require('mongoose');
const Product = require('../models/product.model');


const saveProduct = async (data) => {
  const product = new Product({
    _id: new Mongoose.Types.ObjectId,
    ...data
  });
  
  // Save
  return await product.save();
}

const getProducts = async() => {
    return await Product.find({})
  }
const getProductById = async(id) => {
  return await Product.findById(id)
}


module.exports = {
  saveProduct,
  getProducts,
  getProductById
};