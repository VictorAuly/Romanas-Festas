const express = require("express");
const path = require("path");
const { title } = require("process");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

    const evento = [
        {
            // id: 1,
            nome: "John Doe",
            email: "john.doe@example.com",
            telefone: "+987654321",
            tipo: "Aniversário",
            dataHora: "25 de dezembro, 15h",
            convidados: 50,
            preferencias: "Azul e Prata",
            descricao: "Festa de aniversário cheia de diversão",
            observacoes: "Inclui bolo e balões"
        },
        {
            // id: 2,
            nome: "Jane Smith",
            email: "jane.smith@example.com",
            telefone: "+987654322",
            tipo: "Casamento",
            dataHora: "10 de janeiro, 19h",
            convidados: 150,
            descricao: "Casamento romântico e elegante",
        }
        ];


app.get("/admin/eventos", (req, res) => {
    res.render("admin/EventosPendentes",{evento});
});
app.get("/admin/calendario", (req, res) => {
    res.render("admin/calendario",{evento});
});

app.get("/admin/analise", (req, res) => {
  // Aqui você poderia buscar os dados reais do banco
  const estatisticas = {
    eventosPorMes: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      values: [5, 8, 12, 7, 15, 10]
    },
    diasMaisProcurados: {
      labels: ["Sábados", "Sextas", "Domingos"],
      values: [20, 15, 12]
    },
    tiposDeEventos: {
      labels: ["Aniversário", "Casamento", "Chá de Bebê", "Confraternização"],
      values: [12, 8, 5, 6]
    }
  };

  res.render("admin/analise", { estatisticas });
});


// Rota principal
app.get("/", (req, res) => {
  res.render("index", {evento});
});

app.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
