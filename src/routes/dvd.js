const express = require('express');
const dvdController = require('../controller/dvd');

const router = express.Router();

router.get('/', dvdController.retrieveAllDvd);

router.post('/', dvdController.createDvd);

router.get('/:id', dvdController.retrieveById);

router.put('/:id', dvdController.updateDvd);

router.delete('/:id', dvdController.deleteDvd);

module.exports = router;