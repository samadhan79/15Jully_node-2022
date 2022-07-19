const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema({
    catName: String,
    image: String
})

module.exports = new mongoose.model("Category", CategorySchema);