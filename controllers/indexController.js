const { getFood, getCategories } = require('../models/queries');


module.exports = {
  async get(req, res) {
    const food = await getFood();
    const categories = await getCategories();
    // console.log(food);

    res.render('index', { food, categories });
  }
}