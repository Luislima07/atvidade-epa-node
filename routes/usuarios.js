const express = require("express");
const router = express.Router();

// listar
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Listar Usuarios",
        view: "usuarios/show",
    });
});


// editar
router.get("/edit", async (req, res)=> {
    res.render("base", {
        title: "Editar Usuarios",
        view: "usuarios/edit",
    });
});


// add
router.get("/add", async (req, res)=> {
    res.render("base", {
        title: "Adicionar Usuarios",
        view: "usuarios/add",
    });
});

module.exports = router;
