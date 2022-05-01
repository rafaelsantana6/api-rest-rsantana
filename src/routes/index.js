import express from "express";
import vendedores from "./vendedoresRoutes.js";
import produtos from "./produtosRoutes.js";
import clientes from "./clientesRoutes.js";
import vendas from "./vendasRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Curso de node"})
  })

  app.use(
    express.json(),
    vendedores,
    produtos,
    clientes,
    vendas
  )
}

export default routes