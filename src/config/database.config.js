const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(`mongodb://localhost:27017/mobiledb?authSource=admin`)
    .then(() => console.log('Connected to mongo db'))
    .catch(err => console.error('Error connecting to mongo db', err));

}