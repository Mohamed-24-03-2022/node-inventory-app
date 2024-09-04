require('dotenv').config();


const { getFoodById, getCategories, insertFood, updateFood, destroyFood } = require('../db/queries');
const { body, params, validationResult } = require('express-validator');
const notifier = require('node-notifier');

const get = async (req, res) => {
  const food = await getFoodById(req.params.id);
  const categories = await getCategories();

  res.render('food', { food: food[0], categories });
};

const addFoodGet = async (req, res) => {
  const categories = await getCategories();
  res.render('foodForm', { categories });
}

const addFoodPost = async (req, res) => {
  const { name, price, stock, img, category_id } = req.body;

  await insertFood(name, price, stock, img, category_id);
  res.redirect('/');
}

const updateFoodGet = async (req, res) => {
  const food = await getFoodById(req.params.id);
  const categories = await getCategories();

  res.render('foodForm', { food: food[0], categories });
}

const updateFoodPost = async (req, res) => {

  const { name, price, stock, img, category_id } = req.body;
  const { id } = req.params;
  await updateFood(id, name, price, stock, img, category_id);

  res.redirect('/');
}



const userAuthenticationGet = async (req, res) => {
  const categories = await getCategories();
  res.render('deleteConfirmation', { categories })
}

const deleteFood = async (req, res) => {

  if (!req.body.password || req.body.password !== process.env.PW) {
    if (!req.cookies.foodId) {
      res.cookie('foodId', req.params.id);

    }

    res.redirect('/food/admin/verify');
  }
  else {
    await destroyFood(req.cookies.foodId);
    res.clearCookie('foodId');
    res.redirect('/');
  }

}
module.exports = {
  get,
  addFoodGet,
  addFoodPost,
  updateFoodGet,
  updateFoodPost,
  userAuthenticationGet,
  deleteFood,

}