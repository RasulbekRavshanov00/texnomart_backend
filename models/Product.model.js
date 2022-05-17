const { Schema, model } = require('mongoose')

const ProductModel = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    image:{
        type: String,
        required: true
    },
    descr:{
        type: String,
        required: true
    }
})

module.exports = model('Product', ProductModel)