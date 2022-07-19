const express = require("express");
const router = express.Router();
const Book = require("../model/Bookmodel");

router.get("/", async (req, resp) => {

    try {
        const result = await Book.find();
        resp.send(result);
    } catch (error) {
        resp.send(error)
    }
})

router.post("/", async (req, resp) => {

    try {
        const book = new Book(req.body);
        console.log(book);
        const result = await book.save();
        resp.send(result)
    } catch (error) {
        resp.send(error);
    }

})

router.get("/:id", async (req, resp) => {
    const _id = req.params.id;
    try {
        const result = await Book.find({ _id });
        resp.send(result)
    } catch (error) {
        resp.send(error);
    }


})

router.delete("/:id", async (req, resp) => {
    const _id = req.params.id;
    try {
        const result = await Book.findByIdAndDelete(_id);
        resp.send(result)
    } catch (error) {
        resp.send(error);
    }


})

router.put("/:id", async (req, resp) => {
    const _id = req.params.id;
    try {
        const result = await Book.findByIdAndUpdate(_id, req.body)
        resp.send(result)
    } catch (error) {
        resp.send(error);
    }
})



module.exports = router;