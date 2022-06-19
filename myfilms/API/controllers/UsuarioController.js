const usuarioModel = require('../model/usuarioModel');
const auth = require('../auth/auth');


class UsuarioController {

  async save(req, res){

    const usuario = req.body;

    const max = await usuarioModel.findOne({}).sort({id: -1});

    usuario.id = max == null ? 1 : max.id + 1;
    
    if (await usuarioModel.findOne({'email': usuario.email})){

      res.status(400).send({error: 'Usuário já cadastrado!'});

    }

    usuario.token = undefined;

    const resultado = await usuarioModel.create(usuario);

    auth.incluirToken(resultado);

    res.status(201).json(resultado);

  }


  async list(req, res){

    const resultado = await usuarioModel.find({});

    res.status(200).json(resultado);

  }


  async findById(req, res){

    const id = req.params.id;

    const resultado = await usuarioModel.findOne({'id': id});

    res.status(200).json(resultado);

  }


  async update(req, res){

    const id = req.params.id;

    const _id = String((await usuarioModel.findOne({'id': id}))._id);

    const usuario = await auth.gerarHash(req.body);

    usuario.token = undefined;


    await usuarioModel.findByIdAndUpdate(String(_id), usuario);

    res.status(200).send();

  }


  async delete(req, res){

    const id = req.params.id;

    const _id = String((await usuarioModel.findOne({'id': id}))._id);

    await usuarioModel.findByIdAndRemove(String(_id));

    res.status(200).send();

  }

}


module.exports = new UsuarioController();
