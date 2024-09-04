# SuperMarket Inventory Management

This is a web-based inventory management application for a supermarket. The application allows you to manage various food items, categories, and their associated data, such as price, stock, and images. It also includes an admin verification step before critical operations like deletion.

## Features

- **Food Management**: Add, update, view, and delete food items.
- **Category Management**: Manage food categories.
- **Admin Verification**: Password-protected operations for critical actions like deleting food items.
- **Dynamic Templates**: EJS templates for dynamic content rendering.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **EJS**: Templating engine for generating HTML markup with JavaScript.
- **PostgreSQL**: Relational database system.
- **CSS**: Styling the application with responsive design in mind.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v14.x or later)
- PostgreSQL (v12.x or later)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Mohamed-24-03-2022/node-inventory-app
   cd node-inventory-app
   ```

2. **Install the dependencies**:

   ```bash
   npm install
   ```

3. **Set up the database**:

   - Create a PostgreSQL database.
   - Update the `.env` file with your database credentials and other environment variables.

   ```bash
   HOST=localhost
   DBUSER=yourusername
   PW=yourpassword
   DB=supermarket
   DBPORT=5432
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

5. **Access the application**:

   Open your browser and go to `http://localhost:3000`.

## Usage

### Adding a Category

- Navigate to the "Add Category" link in the sidebar.
- Enter the category name and submit the form.

### Deleting a Category

- Click on the X and the category will be deleted if it doesn't have any food related to it.

### Adding a Food Item

- Navigate to the "Add Food" link in the sidebar.
- Fill out the form with the food details (name, category, price, stock, image URL).
- Submit the form to add the food item to the inventory.

### Viewing Food Details

- Click on the "View Details" button on any food item card to see its details.

### Updating Food Item

- In the details view, you will have options to update the food item.
- Make necessary changes and submit the form.

### Deleting a Food Item

- In the details view, click the "Delete" button.
- Enter the admin password when prompted to confirm the deletion.

## Project Structure

- **/views**: Contains EJS templates for the application.
- **/public**: Contains static files such as CSS.
- **/routes**: Contains route definitions for different parts of the application.
- **/controllers**: Contains the logic for handling requests and responses.
- **/models**: Contains the database models and query logic.
- **/scripts**: Contains setup and utility scripts, such as database migrations.

## License

This project is licensed under the MIT License.

## Acknowledgements

Thanks to all the open-source projects and libraries that made this application possible.
