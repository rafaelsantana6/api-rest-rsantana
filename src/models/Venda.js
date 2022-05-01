import mongoose from "mongoose";

const vendaSchema = new mongoose.Schema(
  {
    id: {type: String},
    produto: {type: mongoose.Schema.Types.ObjectId, ref: 'produtos', required: true},
    vendedor: {type: mongoose.Schema.Types.ObjectId, ref: 'vendedores', required: true},
    cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'clientes', required: true},
    logradouro: {type: String, required: true},
    fachada: {type: Number, required: true},
    complemento: {type: String},
    bairro: {type: String, required: true},
    pontoReferencia: {type: String, required: true},
    cep: {type: String, required: true},
    pagamento: {type: String, required: true},
    banco: {type: String},
    agencia: {type: String},
    conta: {type: String},
    operacao: {type: String},
    vencimento: {type: String},
    statusVenda: {type: String},
    dataOS: {type: String},
    idBundle: {type: String},
    numeroOS: {type: String}
  },
  {
    versionKey: false
  }
);

const vendas = mongoose.model('vendas', vendaSchema);

export default vendas;