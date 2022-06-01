const filmeModel = require("../model/filme");

class FilmeController {

    async save(req, res) {
        const max = await produtoModel.findOne({}).sort({ id: -1 });
        const filme = req.body;
        filme.id = max == null ? 1 : max.id + 1;

        const result = await filmeModel.create(filme);
        res.status(201).json(result);
    }

    async list(req, res) {
        const result = await filmeModel.find({});
        res.status(200).json(result);
    }

    async findById(req, res) {
        const id = req.params.id;
        const result = await filmeModel.findOne({ 'id': id });
        res.status(200).json(result);
    }

    async update(req, res) {
        const id = req.params.id;
        const _id = String((await filmeModel.findOne({ 'id': id }))._id);
        const filme = req.body

        await filmeModel.findByIdAndUpdate(String(_id), filme);
        res.status(200).send();
    }

    async delete(req, res) {
        const id = req.params.id;
        const _id = String((await filmeModel.findOne({ 'id': id }))._id);
        await filmeModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new FilmeController()