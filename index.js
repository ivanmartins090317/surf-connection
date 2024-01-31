const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

// conexão com BD
const connectToDatabase = require("./src/database/connect");

// middleWare ejs/layouts-view
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.json());
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

dotenv.config();
connectToDatabase();

// middleWare para renderizar rotas do app
const rotaTeste = require("./src/router/app");
app.use("/", rotaTeste);

// Servidor e porta
app.listen(3001, () => {
  console.log("servidor funcionando na porta 3001");
});

// Rodar com npm run start
