const express = require("express");
const { trusted } = require("mongoose");
const route = express.Router();
const Category = require("../model/CategoryModel");
const multer = require("multer");
const path = require("path");


var Storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({
    storage: Storage
}).single("file");

route.get("/category", (req, resp) => {

    resp.render("category");
})

route.post("/addCategory", upload, async (req, resp) => {
    try {

        const category = new Category({
            catName: req.body.catName,
            image: req.file.filename
        });
        const result = await category.save();
        resp.render("category", { "success": "Category addedd Successfully!!!" });
    } catch (error) {
        resp.render("category")
    }
})


module.exports = route;