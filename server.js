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
            descricao: "Festa de aniversário cheia de diversão",
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
  const estatisticas = {
    eventosPorMes: {
      labels: ["Janeiro", "Fevereiro", "Março"],
      values: [5, 8, 3]
    },
    diasMaisProcurados: {
      labels: ["Sábado", "Domingo", "Sexta"],
      values: [10, 7, 4]
    },
    tiposEventos: {
      labels: ["Casamentos", "Aniversários", "Corporativos"],
      values: [12, 8, 5]
    }
  };

  res.render("admin/analise", {
    activePage: "analise",  // <<< agora separado
    estatisticas
  });
});



// Rota principal
app.get("/", (req, res) => {
  res.render("index", {evento});
});

app.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080");
});
