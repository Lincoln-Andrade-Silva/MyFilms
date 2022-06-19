const express = require('express');
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController")

router.post('/', UsuarioController.save);
router.get('/', UsuarioController.list);
router.get('/:id', UsuarioController.findById);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.delete);

module.exports = router;