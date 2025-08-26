const express = require("express"); 
const path = require("path"); 
const app = express(); 

// Configuração do EJS como view engine 
app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs"); 
app.use(express.static("public"))
// Rota principal 
const indexRouter = require("./routes/index"); 
app.use("/", indexRouter); 

// Iniciar o servidor e sincronizar com o banco de dados 
app.listen(3000, () => {
console.log("Servidor em execução na porta 3000"); 
}); 