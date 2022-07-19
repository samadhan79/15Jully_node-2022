const mongoose = require("mongoose");


const AdminSchema = new mongoose.Schema({
    Username: String,
    Password: String
})


module.exports = mongoose.model("Admin", AdminSchema);