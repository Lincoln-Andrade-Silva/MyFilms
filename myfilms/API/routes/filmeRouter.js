const express = require('express');
const router = express.Router();
const filmeController = require('../controllers/FilmeController')

router.post('/', filmeController.save);
router.get('/', filmeController.list);
router.get('/:id', filmeController.findById);
router.put('/:id', filmeController.update);
router.delete('/:id', filmeController.delete);

module.exports = router;