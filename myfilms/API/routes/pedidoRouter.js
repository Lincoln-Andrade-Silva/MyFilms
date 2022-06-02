const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/PedidoController')

router.post('/', PedidoController.save);
router.get('/', PedidoController.list);
router.get('/:id', PedidoController.findById);
router.put('/:id', PedidoController.update);
router.delete('/:id', PedidoController.delete);

module.exports = router;