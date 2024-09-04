const router = require('express').Router();

const foodController = require('../controllers/foodController');
const asyncHandler = require('express-async-handler')




router.get('/add', asyncHandler(foodController.addFoodGet))
router.post('/add', asyncHandler(foodController.addFoodPost))

router.get('/update/:id', asyncHandler(foodController.updateFoodGet))
router.post('/update/:id', asyncHandler(foodController.updateFoodPost))

router.get('/admin/verify', asyncHandler(foodController.userAuthenticationGet))
router.post('/delete/:id', asyncHandler(foodController.deleteFood))

router.get('/:id', asyncHandler(foodController.get))


module.exports = router;
