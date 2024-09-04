const { getFoodByCategory, getCategories, insertCategory, destroyCategory } = require('../db/queries');
const { body, validationResult } = require('express-validator');
const notifier = require('node-notifier');

const get = async (req, res) => {

  const food = await getFoodByCategory(req.params.id);
  const categories = await getCategories();

  res.render('index', { food, categories });

};

const addCategoryGet = async (req, res) => {
  const categories = await getCategories();

  res.render('categoryForm', { categories });

};

const addCategoryPost = [
  body('name').trim().notEmpty().isAlpha(),
  async (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      notifier.notify({
        title: 'Error !',
        message: result.array()[0].msg,
        sound: true,
        wait: false
      });
      return;
    }

    await insertCategory(req.body.name);
    res.redirect('/');
  }

];

const deleteCategory = async (req, res) => {
  try {
    await destroyCategory(req.params.id);
    res.redirect('/');

  } catch (error) {
    notifier.notify({
      title: 'alert!',
      message: 'OOPS ! Cant delete a category with existing items.',
      sound: true,
      wait: false
    });
  }
}

module.exports = {
  get,
  addCategoryGet,
  addCategoryPost,
  deleteCategory,

}