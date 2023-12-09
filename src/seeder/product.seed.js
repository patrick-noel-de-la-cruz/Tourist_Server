/**
 * Database seeder for Products
 */
const Product = require('../models/product.model');
const ProductService = require('../services/product.service')

const products = [
    {"productName": "Cassava Cake", "price": "50.00", "image":"food.jpg"},
    {"productName": "Puto Cake", "price": "30.00", "image":"food2.png"},
    {"productName": "Apple Cake", "price": "60.00", "image":"food.jpg"}
];

const ProductSeeder = {
    
    clear: function() {
        return Product.collection.drop()
            .then(()=> console.log('Product deleted'))
            .catch(err => console.error(err.errmsg))
    },

    seed: function() {
        const promises = [];
        products.forEach(product => {
            promises.push(ProductService.saveProduct(product));
        });

        return Promise.all(promises)
            .then(() => console.log('Successful'))
            .catch(err => console.error(err));
    },

    freshSeed: async function() {
        await this.clear();
        return this.seed();
    }

}

module.exports = ProductSeeder


