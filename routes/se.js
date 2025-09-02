const express = require("express");
const router = express.Router();

//Rotas

router.get("/", async (req, res) => {
    res.render("base", {
        title: "Sistemas Embarcados",
        view: "se/show",
    })
});

module.exports = router;