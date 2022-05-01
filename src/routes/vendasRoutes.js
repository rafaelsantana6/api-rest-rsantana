import express from "express";
import VendaController from "../controllers/vendasController.js";

const router = express.Router();

router
  .get("/vendas", VendaController.listarVendas)
  .get("/vendas/:id", VendaController.listarVendaPorId)
  .post("/vendas", VendaController.cadastrarVenda)
  .put("/vendas/:id", VendaController.atualizarVenda)
  .delete("/vendas/:id", VendaController.excluirVenda)

export default router;   