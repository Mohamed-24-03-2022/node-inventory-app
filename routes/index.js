var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const asyncHandler = require('express-async-handler')

/* GET home page. */
router.get('/', asyncHandler(indexController.get));


module.exports = router;
