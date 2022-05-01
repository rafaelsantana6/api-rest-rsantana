import vendedores from "../models/Vendedor.js";

class VendedorController {

  static listarVendedores = (req, res) => {
    vendedores.find((err, vendedores) => {
      res.status(200).json(vendedores)
  })
  }

  static listarVendedorPorId = (req, res) => {
    const id = req.params.id;

    vendedores.findById(id, (err, vendedores) => {
      if(err) {
        res.status(400).send({message: `${err.message} - ID do vendedor não localizado.`})
      } else {
        res.status(200).send(vendedores);
      }
    })
  }

  static cadastrarVendedor = (req, res) => {
    let vendedor = new vendedores(req.body);

    vendedor.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Vendedor.`})
      } else {
        res.status(201).send(vendedor.toJSON())
      }
    })
  }

  static atualizarVendedor = (req, res) => {
    const id = req.params.id;

    vendedores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Vendedor atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirVendedor = (req, res) => {
    const id = req.params.id;

    vendedores.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Vendedor removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default VendedorController