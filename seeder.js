const mongoose = require('mongoose');
const dbconnection = require('./src/config/database.config');
const db = mongoose.connection;
const ProductSeeder = require('./src/seeder/product.seed');
const UserSeeder = require('./src/seeder/user.seed');
db.on('error', err => console.error(err));
db.once('open', async function () {
    console.log('Connected to database');

    const seeds = [
        ProductSeeder.freshSeed(),
        UserSeeder.freshSeed()
    ];

    // Notify the user that async tasks are finished
    Promise.all(seeds).then(() => console.log('Pre data has been successfully seeded'));
});

/**
 * Load Database Connection
 */
dbconnection();
