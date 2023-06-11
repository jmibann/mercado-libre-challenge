const express = require('express');
const router = express.Router();

const itemsController = require('../controller/itemsController');

router.route('/:id')
  .get(itemsController.fetchItem);

router.route('/')
  .get(itemsController.searchItems);


module.exports = router;