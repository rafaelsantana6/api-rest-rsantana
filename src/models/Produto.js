import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    portifolio: {type: String, required: true},
    comissaoComDoc: {type: Number, required: true},
    comissaoSemDoc: {type: Number, required: true}
  },
  {
    versionKey: false
  }
);

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;