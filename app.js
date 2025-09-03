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

const categoriaPW = require("./routes/pw");
app.use("/pw", categoriaPW);

const categoriaSE = require("./routes/se");
app.use("/se", categoriaSE);

const categoriaEquipe = require("./routes/equipe");
app.use("/equipe", categoriaEquipe);

const categoriaUsuarios = require("./routes/usuarios");
app.use("/usuarios", categoriaUsuarios);

const categoriaCursos = require("./routes/cursos");
app.use("/cursos", categoriaCursos);

const categoriaAlunos = require("./routes/alunos");
app.use("/alunos", categoriaAlunos);

const categoriaCategorias = require("./routes/categorias");
app.use("/categorias", categoriaCategorias);

let mensagens = [
  { de: "Bot", texto: "Olá! Como posso ajudar?" }
];
let api_key = "SUA_CHAVE_AQUI";

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rotas de mensagens
app.get("/mensagens", (req, res) => {
  res.json(mensagens);
});

app.post("/enviar-mensagem", upload.none(), (req, res) => {
  const texto = req.body.texto;
  if (!texto) return res.status(400).json({ erro: "Mensagem vazia" });

  mensagens.push({ de: "Usuário", texto });

  // Simula resposta do bot
  mensagens.push({ de: "Bot", texto: "Recebi: " + texto });

  res.json({ sucesso: true });
});


// Rota de configuração da chave
app.post("/configurar-chave", upload.none(), (req, res) => {
  api_key = req.body.chave || api_key;
  res.json({ mensagem: "Chave salva com sucesso!" });
});




// Iniciar o servidor e sincronizar com o banco de dados 
app.listen(3000, () => {
console.log("Servidor em execução na porta 3000"); 
}); 