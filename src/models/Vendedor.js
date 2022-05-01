import mongoose from "mongoose";

const vendedorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    cpf: {type: Number, required: true},
    dataAdmissao: {type: String, required: true},
    situacao: {type: String, required: true},
    matricula: {type: String}
  },
  {
    versionKey: false
  }
);

const vendedores = mongoose.model('vendedores', vendedorSchema);

export default vendedores;