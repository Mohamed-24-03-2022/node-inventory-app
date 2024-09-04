const pool = require('./pool');


const getFood = async (categoryId = null) => {
  const { rows } = await pool.query('SELECT * FROM food');
  return rows;
}

const getCategories = async () => {
  const { rows } = await pool.query('SELECT * FROM categories');
  return rows;
}

const getFoodByCategory = async (categoryId) => {
  const { rows } = await pool.query('SELECT * FROM food WHERE category_id = $1', [categoryId]);
  return rows;
}

const insertCategory = async (name) => {
  await pool.query('INSERT INTO categories (name) VALUES ($1)', [name]);
}

const destroyCategory = async (categoryId) => {
  await pool.query('DELETE FROM categories WHERE id = $1', [categoryId]);
}

/*________________ food queries ________________*/
const getFoodById = async (foodId) => {
  const { rows } = await pool.query('SELECT * FROM food WHERE id = $1', [foodId]);
  return rows;
}

const insertFood = async (name, price, stock, img, category_id) => {
  await pool.query('INSERT INTO food (name, price, stock, img, category_id) VALUES ($1, $2, $3, $4, $5)', [name, price, stock, img, category_id]);
}

const updateFood = async (id, name, price, stock, img, category_id) => {
  await pool.query('UPDATE food SET name = $1, price = $2, stock = $3, img = $4, category_id = $5 WHERE id = $6', [name, price, stock, img, category_id, id]);
}

const destroyFood = async (foodId) => {
  await pool.query('DELETE FROM food WHERE id = $1', [foodId]);
}

module.exports = {
  getFood,
  getCategories,
  getFoodByCategory,
  insertCategory,
  destroyCategory,
  getFoodById,
  insertFood,
  updateFood,
  destroyFood,

}