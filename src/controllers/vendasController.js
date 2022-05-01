import vendas from "../models/Venda.js";

class VendaController {

  static listarVendas = (req, res) => {
    vendas.find()
      .populate('produto vendedor cliente')
      .exec((err, vendas) => {
        res.status(200).json(vendas)
  })
  }

  static listarVendaPorId = (req, res) => {
    const id = req.params.id;

    vendas.findById(id)
      .populate('produto vendedor cliente')
      .exec((err, vendas) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id da venda não localizado.`})
      } else {
        res.status(200).send(vendas);
      }
    })
  }

  static cadastrarVenda = (req, res) => {
    let venda = new vendas(req.body);

    venda.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar venda.`})
      } else {
        res.status(201).send(venda.toJSON())
      }
    })
  }

  static atualizarVenda = (req, res) => {
    const id = req.params.id;

    vendas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Venda atualizada com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirVenda = (req, res) => {
    const id = req.params.id;

    vendas.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Venda removida com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static listarVendaPorEditora = (req, res) => {
    const editora = req.query.editora

    vendas.find({'editora': editora}, {}, (err, vendas) => {
      res.status(200).send(vendas);

    })
  }



}

export default VendaController