const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    BookName: {
        type: String,
        required: true
    },
    BookPrice: Number,
    Qty: Number,
})


module.exports = mongoose.model("Book", BookSchema);

