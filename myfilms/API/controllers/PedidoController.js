const pedidoModel = require("../model/pedido");

class PedidoController {
    async save(req, res) {
        const max = await pedidoModel.findOne({}).sort({ id: -1 });
        const filme = req.body;
        filme.id = max == null ? 1 : max.id + 1;

        const result = await pedidoModel.create(filme);
        res.status(201).json(result);
    }

    async list(req, res) {
        const result = await pedidoModel.find({});
        res.status(200).json(result);
    }

    async findById(req, res) {
        const id = req.params.id;
        const result = await pedidoModel.findOne({ 'id': id });
        res.status(200).json(result);
    }

    async update(req, res) {
        const id = req.params.id;
        const _id = String((await pedidoModel.findOne({ 'id': id }))._id);
        const filme = req.body

        await pedidoModel.findByIdAndUpdate(String(_id), filme);
        res.status(200).send();
    }

    async delete(req, res) {
        const id = req.params.id;
        const _id = String((await pedidoModel.findOne({ 'id': id }))._id);
        await pedidoModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new PedidoController()