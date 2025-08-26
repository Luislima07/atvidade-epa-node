const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
    res.render("base", {
        title: "EPA - Home",
        view: "index",
    })
})

module.exports = router;