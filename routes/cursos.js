const express = require("express");
const router = express.Router();

// listar
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Listar Cursos",
        view: "cursos/show",
    });
});


// editar
router.get("/edit", async (req, res)=> {
    res.render("base", {
        title: "Editar Cursos",
        view: "cursos/edit",
    });
});


// add
router.get("/add", async (req, res)=> {
    res.render("base", {
        title: "Adicionar Cursos",
        view: "cursos/add",
    });
});

module.exports = router;
