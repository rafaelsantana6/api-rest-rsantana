import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    cpf: {type: String, required: true},
    portifolio: {type: String, required: true},
    dataNascimento: {type: String, required: true},
    rg: {type: String, required: true},
    nomeMae: {type: String, required: true},
    email: {type: String, required: true},
    whatsapp: {type: String, required: true},
    telefone2: {type: String, required: true}
  },
  {
    versionKey: false
  }
);

const clientes = mongoose.model('clientes', clienteSchema);

export default clientes;