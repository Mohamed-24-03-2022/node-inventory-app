require('dotenv').config();

const fs = require('fs');
const path = require('path');

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS food (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL, 
  price FLOAT,
  stock INT,
  img TEXT,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);


INSERT INTO categories (name) VALUES
('Breadstuff'),
('Dairy'),
('Fish'),
('Fruits'),
('Meat'),
('Other'),
('Pasta'),
('Seafood'),
('Vegetables');


INSERT INTO food (name, price, stock, img, category_id) VALUES
('Whole Wheat Bread', 2.99, 50, 'https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/16:9/w_4000,h_2250,c_limit/milk-bread.jpg', 1),
('Croissant', 1.49, 100, 'https://optimise2.assets-servd.host/bridor-new/production/uploads/59103_side_W.png?w=1200&auto=compress%2Cformat&fit=crop&dm=1655312074&s=efff3ab7abded93884f0a2007dea00c1', 1),
('Milk', 1.79, 75, 'https://www.arla.ph/497d68/globalassets/arla-ph/product-packshots/arla-milk-goodness/chocolate-1l--200ml-388280.png?preset=ogbg,border20,background-color11', 2),
('Yogurt', 0.99, 60, 'https://www.bigbasket.com/media/uploads/p/l/40123244_5-milky-mist-fruit-yoghurt-strawberry.jpg', 2),
('Salmon', 12.99, 20, 'https://www.bigsams.in/wp-content/uploads/2021/11/SALMON.jpg', 3),
('Tuna', 3.49, 35, 'https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Canned-tuna-02-0181b73.jpg?quality=90&resize=440,400', 3),
('Apple', 0.89, 150, 'https://www.bonparfumeur.com/cdn/shop/articles/Pomme.jpg?v=1688993650', 4),
('Orange', 0.79, 120, 'https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png', 4),
('Chicken Breast', 8.99, 25, 'https://www.tyson.com/static/bfc0de4d02bded3c6c3d7583cba704df/82c3a/tyon-fresh-boneless-skinless-chicken-breasts-fresh-chicken-90075620308297_0.png', 5),
('Beef Steak', 15.99, 15, 'https://embed.widencdn.net/img/beef/melpznnl7q/800x600px/Top%20Sirloin%20Steak.psd?keep=c&u=7fueml', 5),
('Tofu', 2.49, 80, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgMis9gaibtTnT7M7i2TOkAdSvNsn2uSWag&s', 6),
('Almond Milk', 3.99, 40, 'https://i5.walmartimages.com/seo/Almond-Breeze-Original-Almond-Milk-64-oz-Bottle_77d7a343-9292-4c92-8f78-c92d40e3083c.359ab52b5368fe8b016e06ad69f65f00.jpeg', 6),
('Spaghetti', 1.29, 70, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQot1trMVGDLYezribfriHLbKB1T7hInJ83Gg&s', 7),
('Macaroni', 1.49, 65, 'https://backend.panzani.fr/app/uploads/2023/10/classiques-macaroni-1.png', 7),
('Shrimp', 9.99, 30, 'https://ip.prod.freshop.retail.ncrcloud.com/resize?url=https://images.freshop.ncrcloud.com/00070038576549/bb5f4cf957b6e99deb65a17dc4d45143_large.png&width=512&type=webp&quality=90', 8),
('Lobster', 19.99, 10, '', 8),
('Spinach', 2.99, 40, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Xvb-7TiGMz-_WJZ9gclON0PHP_TUNsy6wg&s', 9),
('Carrot', 1.19, 85, 'https://cdn11.bigcommerce.com/s-kc25pb94dz/images/stencil/1280x1280/products/271/762/Carrot__40927.1634584458.jpg?c=2', 9);


`;


async function main() {
  const { HOST, DBUSER, PW, DB, DBPORT } = process.env
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${DBUSER}:${PW}@${HOST}:${DBPORT}/${DB}`,
    // ssl: {
    //   ca: fs.readFileSync(path.join(__dirname, '/eu-north-1-bundle.pem'))
    // }

  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();