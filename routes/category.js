const router = require('express').Router();

const categoryController = require('../controllers/categoryController');
const asyncHandler = require('express-async-handler')




router.get('/add', asyncHandler(categoryController.addCategoryGet))
router.post('/add', categoryController.addCategoryPost[0], asyncHandler(categoryController.addCategoryPost[1]))

router.post('/delete/:id', asyncHandler(categoryController.deleteCategory))

router.get('/:id', asyncHandler(categoryController.get))


module.exports = router;
