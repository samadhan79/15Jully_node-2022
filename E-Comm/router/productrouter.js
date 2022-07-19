const express = require("express");
const route = express.Router();
const Category = require("../model/CategoryModel");

route.get("/", async (req, resp) => {

    try {
        const result = await Category.find();
        resp.render("product", { "data": result });
    } catch (error) {
        resp.render("product");
    }

})

module.exports = route;

