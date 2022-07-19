const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const PORT = 3000;

const viewPath = path.join(__dirname, "../templetes/views");
const staticPath = path.join(__dirname, "../public")

app.use(express.static(staticPath))
//console.log(viewPath);
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "hbs");
app.set("views", viewPath);

const productRouter = require("../router/productrouter");
app.use("/", productRouter)

const categoryRoter = require("../router/categoryRouter");
app.use("/", categoryRoter)

mongoose.connect("mongodb://127.0.0.1:27017/MySell").then(() => {
    console.log("Db connected successfully !!!  ")
}).catch(err => {
    console.log(err);
})

app.listen(PORT, (req, resp) => {
    console.log("Server running on port " + PORT);
})