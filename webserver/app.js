const { resolvePtr } = require("dns");
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

//console.log(__dirname)
//console.log(__filename)
path.join(__dirname, 'home.html');

app.get("/", (req, resp) => {
    //resp.send("Welcome to Home");
    resp.sendFile(path.join(__dirname, "home.html"));

})

app.get("/about", (req, resp) => {
    // resp.send("welcom to about us")
    resp.status(200).json({
        "name": "Tops",
        "email": "tops@gmail.com"
    })
})

app.get("*", (req, resp) => {
    resp.status(400).send("404 page not fount");
})

app.listen(PORT, (req, resp) => {
    console.log(`Server runing on port : ${PORT}`)
})