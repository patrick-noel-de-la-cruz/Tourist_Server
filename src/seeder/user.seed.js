/**
 * Database seeder for User
 */
const User = require('../models/user.model');
const UserService = require('../services/user.service')

const users = [
    {"firstName": "John", "lastName": "Doe", "email":"johndoe@email.com", "password": "password123"},
    {"firstName": "Grace", "lastName": "Green", "email":"gracegreen@email.com", "password": "password123"}
];

const UserSeeder = {
    
    clear: function() {
        return User.collection.drop()
            .then(()=> console.log('User deleted'))
            .catch(err => console.error(err.errmsg))
    },

    seed: function() {
        const promises = [];
        users.forEach(user => {
            promises.push(UserService.saveUser(user));
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

module.exports = UserSeeder


