import express from "express";
import VendedorController from "../controllers/vendedoresController.js";

const router = express.Router();

router
  .get("/vendedores", VendedorController.listarVendedores)
  .get("/vendedores/:id", VendedorController.listarVendedorPorId)
  .post("/vendedores", VendedorController.cadastrarVendedor)
  .put("/vendedores/:id", VendedorController.atualizarVendedor)
  .delete("/vendedores/:id", VendedorController.excluirVendedor)

export default router;   