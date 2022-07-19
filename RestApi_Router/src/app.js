const express = require("express")
const app = express();
const PORT = 3000;
const connection = require("../util/connection")
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/library").then(() => {
    console.log("connection established successfully !!!!")
}).catch(err => {
    console.log(err);
})

app.listen(PORT, (req, resp) => {
    console.log("Server running on port " + PORT);
})
app.use(express.json())
const BookRouter = require("../router/bookrouter");
app.use("/book", BookRouter);