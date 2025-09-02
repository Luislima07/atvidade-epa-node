const express = require("express");
const router = express.Router();

//Rotas

router.get("/", async (req, res) => {
    res.render("base", {
        title: "Programação Web",
        view: "pw/show",
    })
});

module.exports = router;