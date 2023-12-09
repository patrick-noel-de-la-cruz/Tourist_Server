const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    _id: Mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

userSchema.set('toJSON', { virtuals: true })

module.exports = Mongoose.model('user', userSchema);