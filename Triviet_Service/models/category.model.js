const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    parent_id: String,
    category_name: String,
    create_date: {
        type: Date,
        default: Date.now
    },
    status: Boolean,
})

const CategoryModel = mongoose.model('category',CategorySchema)

module.exports = {CategoryModel}