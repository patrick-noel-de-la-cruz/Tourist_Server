const Mongoose = require('mongoose');

const productSchema = new Mongoose.Schema({
    _id: Mongoose.Schema.Types.ObjectId,
    productName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

productSchema.set('toJSON', { virtuals: true })

module.exports = Mongoose.model('product', productSchema);